'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn("cards","list",{
      type:Sequelize.ENUM("ToDo","Doing","Done", "Blocked"),
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn("cards","list",{
      type:Sequelize.STRING,
    })
  }
};
