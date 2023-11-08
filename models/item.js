"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.customer);
    }
  }
  item.init(
    {
      item_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      qty: DataTypes.INTEGER,
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "customer",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
