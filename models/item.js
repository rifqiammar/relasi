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
      item.belongsTo(models.customer, { foreignKey: "customer_id" });
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
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "customer",
          key: "customer_id",
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
