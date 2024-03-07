'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentResponse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Commentor, {as: 'replies', foreignKey: 'commentorId'})
      this.belongsTo(models.User, {as: 'user', foreignKey: 'userId'})
    }
  }
  CommentResponse.init({
    userId: DataTypes.INTEGER,
    commentorId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommentResponse',
  });
  return CommentResponse;
};