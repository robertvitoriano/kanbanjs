'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("cards","list",{
      name:'listaa',
    })

  },

  async down (queryInterface, Sequelize) {

  }
};
