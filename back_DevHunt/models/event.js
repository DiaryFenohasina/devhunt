'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Club, {as: "events", foreignKey: "clubId"})
    }
  }
  Event.init({
    clubId: DataTypes.INTEGER,
    legend: DataTypes.TEXT,
    imageEvent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};