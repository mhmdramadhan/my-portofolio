'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgrammingLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // define association here
      ProgrammingLanguage.belongsToMany(models.Project, {
        through: models.ProjectProgrammingLanguage,
        foreignKey: 'programmingLanguageId',
        otherKey: 'projectId',
        as: 'projects'
      });

      // digunakan untuk highlight (hasMany, karena bisa lebih dari 1 project pakai dia sebagai highlight)
      ProgrammingLanguage.hasMany(models.Project, {
        foreignKey: 'prId',
        as: 'highlightedProjects'
      });
    }
  }
  ProgrammingLanguage.init({
    name: DataTypes.STRING,
    type: DataTypes.ENUM('language', 'framework', 'library'),
    icon_url: DataTypes.TEXT,
    proficiency: DataTypes.ENUM('beginner', 'intermediate', 'advanced', 'expert')
  }, {
    sequelize,
    modelName: 'ProgrammingLanguage',
  });
  return ProgrammingLanguage;
};