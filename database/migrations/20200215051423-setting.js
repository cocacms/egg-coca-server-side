'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(Sequelize.Utils.pluralize('setting'), {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      key: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true,
      },

      value: Sequelize.TEXT,

      // Timestamps
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(Sequelize.Utils.pluralize('setting'));
  },
};
