'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.renameColumn('cards','lista','list')
   await queryInterface.renameColumn('cards','conteudo','content')
   await queryInterface.renameColumn('cards','titulo','title')

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('cards','list','lista')
    await queryInterface.renameColumn('cards','content','conteudo')
    await queryInterface.renameColumn('cards','title','titulo')
  }
};
