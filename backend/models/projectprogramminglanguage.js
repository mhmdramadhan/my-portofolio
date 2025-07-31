'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectProgrammingLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectProgrammingLanguage.init({
    projectId: DataTypes.INTEGER,
    programmingLanguageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectProgrammingLanguage',
  });
  return ProjectProgrammingLanguage;
};