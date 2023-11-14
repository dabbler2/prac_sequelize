'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
		this.belongsTo(models.Team, {
			targetKey: 'id',
			foreignKey: 'teamID'
		})
    }
  }
  Player.init({
    playerName: DataTypes.STRING,
    teamID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};