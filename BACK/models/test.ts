'use strict';
import { Model } from 'sequelize';

export type testTributes = {
  id?:string
  name:string

}

export default (sequelize:any, DataTypes:any) => {
  class test extends Model<testTributes> implements testTributes {
    id!: string;
    name!: string;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  test.init({
    id: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'teste',
  });
  return test;
};