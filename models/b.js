'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class B extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  this.belongsTo(models.A, {targetKey: 'id', foreignKey: 'aID'})
    }
  }
  B.init({
    name: DataTypes.STRING,
	aID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'B',
  });
  return B;
};