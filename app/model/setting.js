'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;
  const Model = app.model.define('setting', {
    key: {
      type: Sequelize.STRING(12),
      allowNull: false,
      unique: true,
    },

    value: Sequelize.TEXT,
  });

  Model.associate = function() {};

  return Model;
};
