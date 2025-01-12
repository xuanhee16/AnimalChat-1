'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.user, {
        foreignKey: 'user_id'
      })
      post.hasMany(models.comment, {
        foreignKey: 'comment_user_id'
      })
    }
  };
  post.init({
    user_id: DataTypes.STRING,
    post_title: DataTypes.STRING,
    post_content: DataTypes.STRING,
    post_img: DataTypes.STRING,
    animalcategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};