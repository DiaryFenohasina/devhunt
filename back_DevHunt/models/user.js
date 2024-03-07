'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Skill, { through: "UserSkill", as: "skills", foreignKey: "userId"})
      this.hasMany(models.Club)
      this.hasMany(models.Post)
      this.hasMany(models.Commentor, {foreignKey: 'userId', as: 'user'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    imageProfile: DataTypes.STRING,
    level: DataTypes.STRING,
    background: DataTypes.STRING,
    isMentor: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};