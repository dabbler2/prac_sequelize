'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class A extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  this.hasMany(models.B, {sourceKey: 'id', foreignKey: 'aID'})
    }
  }
  A.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'A',
  });
  return A;
};