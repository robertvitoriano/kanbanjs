import fs from 'fs';
import path from 'path';
import config from './../config/config'
import { Umzug, SequelizeStorage } from 'umzug'
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

const umzug = new Umzug({
  migrations: { glob: './migrations/*.js',         
  resolve: ({ name, path, context }) => {
    const migration = require(path || '')
    return {
        name,
        up: async () => migration.up(context, Sequelize),
        down: async () => migration.down(context, Sequelize),
    }
}, },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
  
});


(async () => {
  // Checks migrations and run them if they are not already applied. To keep
  // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
  // will be automatically created (if it doesn't exist already) and parsed.
  await umzug.up();
})();

export default db;
