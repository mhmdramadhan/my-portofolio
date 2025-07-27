'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProgrammingLanguages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      type: {
        type: Sequelize.ENUM,
        values: ['language', 'framework', 'library']
      },
      icon_url: {
        type: Sequelize.TEXT
      },
      proficiency: {
        type: Sequelize.ENUM,
        values: ['beginner', 'intermediate', 'advanced', 'expert']
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
    await queryInterface.dropTable('ProgrammingLanguages');
  }
};