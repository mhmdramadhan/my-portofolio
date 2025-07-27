'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prId: {
        type: Sequelize.INTEGER(10)
      },
      title: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.TEXT
      },
      thumbnail: {
        type: Sequelize.TEXT
      },
      github_url: {
        type: Sequelize.TEXT
      },
      live_url: {
        type: Sequelize.TEXT
      },
      is_featured: {
        type: Sequelize.ENUM,
        values: ['yes', 'no']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};