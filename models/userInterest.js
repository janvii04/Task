module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "userInterest",
      {
        ...require("./cors")(Sequelize, DataTypes),
        
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: user,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete:"CASCADE"
        },
        interestId: {
          type: DataTypes.INTEGER,
          references: {
            model: user,
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete:"CASCADE"
        },
      },
  
      {
        tableName: "userInterest",
      }
    );
  };
  