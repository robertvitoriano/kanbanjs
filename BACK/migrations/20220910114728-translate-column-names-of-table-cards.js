'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("cards","lista",{
      name:'list',
    })
    await queryInterface.changeColumn("cards","conteudo",{
      name:'content',
    })
    await queryInterface.changeColumn("cards","titulo",{
      name:'title',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("cards","list",{
      name:'lista',
    })
  }
};
