'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skills.init({
    name: DataTypes.STRING,
    level: DataTypes.ENUM('beginner', 'intermediate', 'advanced', 'expert'),
    category: DataTypes.ENUM('soft', 'hard skills', 'languages', 'tachnical')
  }, {
    sequelize,
    modelName: 'Skills',
  });
  return Skills;
};