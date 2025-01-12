"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.user, {
        foreignKey: "user_id",
      })
      comment.belongsTo(models.post, {
        foreignKey: "id",
      })
    }
  }
  comment.init(
    {
      comment_user_id: DataTypes.STRING,
      comment_content: DataTypes.STRING,
      post_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  )
  return comment
}
