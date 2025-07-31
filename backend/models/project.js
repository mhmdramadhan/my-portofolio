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
      // add join to programming languages table
      Project.belongsToMany(models.ProgrammingLanguage, {
        through: models.ProjectProgrammingLanguage,
        foreignKey: 'projectId',
        otherKey: 'programmingLanguageId',
        as: 'programmingLanguages'
      });

      // add association to programmingLanguage table (yang higlight)
      Project.belongsTo(models.ProgrammingLanguage, {
        foreignKey: 'prId', // foreign key di table `projects`
        as: 'highlightLanguage'
      });

    }
  }
  Project.init({
    prId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
    github_url: DataTypes.TEXT,
    live_url: DataTypes.TEXT,
    is_featured: DataTypes.ENUM('yes', 'no')
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
  });
  return Project;
};