'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    prId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
    github_url: DataTypes.TEXT,
    live_url: DataTypes.TEXT,
    is_featured: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};