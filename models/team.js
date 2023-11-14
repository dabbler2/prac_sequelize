'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
		this.hasMany(models.Player, {
			sourceKey: 'id',
			foreignKey: 'teamID'
		})
    }
  }
  Team.init({
    teamName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};