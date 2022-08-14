'use strict';
import {
  Model
} from 'sequelize';


type CardAttributes = {
  id: string,
  titulo: string,
  conteudo:string,
  lista:string
};

module.exports = (sequelize: any, DataTypes: any) => {
  class Card extends Model<CardAttributes> implements CardAttributes{
    id!: string;
    titulo!: string;
    conteudo!: string;
    lista!: string;
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
    titulo: {
      type:DataTypes.STRING,
      allowNull: false
    },
    conteudo: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lista: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'card',
  });
  return Card;
};