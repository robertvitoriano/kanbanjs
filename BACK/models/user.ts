'use strict';
import { Model } from 'sequelize';

export type UserTributes = {
  id?:string
  name:string
  password?:string
  email:string
  username:string
}

export default (sequelize:any, DataTypes:any) => {
  class User extends Model<UserTributes> implements UserTributes {
    id!: string;
    name!: string;
    password!: string;
    email!: string;
    username!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  User.init({
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
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};