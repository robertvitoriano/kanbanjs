'use strict';
import {
  Model
} from 'sequelize';


export type CardAttributes = {
  id: string,
  title: string,
  content:string,
  list:string
};

export default (sequelize: any, DataTypes: any) => {
  class Card extends Model<CardAttributes> implements CardAttributes{
    id!: string;
    title!: string;
    content!: string;
    list!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Card.init({
    id: {
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    title: {
      type:DataTypes.STRING,
      allowNull: false
    },
    content: {
      type:DataTypes.STRING(800),
      allowNull: false,

    },
    list: {
      type:DataTypes.ENUM("ToDo","Doing","Done", "Blocked"),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'card',
  });
  return Card;
};