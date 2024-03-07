'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {as: "creator", foreignKey: "userId"})
      this.hasMany(models.Event, {as: "events", foreignKey: "clubId"})
    }
  }
  Club.init({
    userId: DataTypes.INTEGER,
    clubName: DataTypes.STRING,
    clubBio: DataTypes.TEXT,
    clubDescription: DataTypes.TEXT,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Club',
  });
  return Club;
};