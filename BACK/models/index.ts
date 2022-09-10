import fs from 'fs';
import path from 'path';
import config from './../config/config'
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const environmentConfig = config[env];
const db:any = {};

let sequelize:any;

if (environmentConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[environmentConfig.use_env_variable], environmentConfig);
} else {
  sequelize = new Sequelize(environmentConfig.database, environmentConfig.username, environmentConfig.password, environmentConfig);
}

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach((modelFile: any) => {
    const model = require(path.join(__dirname, modelFile)).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;



export default db;
