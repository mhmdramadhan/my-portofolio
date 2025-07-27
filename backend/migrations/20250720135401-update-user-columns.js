'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING(100),
      allowNull: false
    });
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(100),
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING(255)
    });
    await queryInterface.changeColumn('users', 'email', {
      type: Sequelize.STRING(255),
      unique: true
    });
    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING(255)
    });
  }
};
