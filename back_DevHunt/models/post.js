'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {as: 'author', foreignKey: 'userId'})
      this.hasMany(models.Commentor, {as: 'comments', foreignKey: 'postId'})
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    pieceJointe: DataTypes.STRING,
    nbrLike: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};