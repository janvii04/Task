module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "interest",
      {
        ...require("./cors")(Sequelize, DataTypes),
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      },
  
      {
        tableName: "interest",
      }
    );
  };
  