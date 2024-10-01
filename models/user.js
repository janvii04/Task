module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "users",
      {
        ...require("./cors")(Sequelize, DataTypes),
        name: {
          type: DataTypes.string(255),
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
        tableName: "user",
      }
    );
  };
  