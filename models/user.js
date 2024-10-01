module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "users",
      {
        ...require("./cors")(Sequelize, DataTypes),
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.VARCHAR,
          allowNull: false,
        },
        Age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Email: {
            type: DataTypes.VARCHAR,
            allowNull: false,
        },
      },
  
      {
        tableName: "users",
      }
    );
  };
  