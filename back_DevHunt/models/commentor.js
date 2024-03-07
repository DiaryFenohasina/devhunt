'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
      this.belongsTo(models.Post, {foreignKey: 'postId', as: 'comments'})
      this.hasMany(models.CommentResponse, {as: 'replies', foreignKey: 'commentorId'})
    }
  }
  Commentor.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentor',
  });
  return Commentor;
};