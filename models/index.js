const Sequelize = require("sequelize");
const sequelize = require("../dbconnection").sequelize;
module.exports = {
  userModel: require("./user")(Sequelize, sequelize, Sequelize.DataTypes)
};