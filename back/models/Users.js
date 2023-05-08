const Sequelize = require("sequelize");
const db = require("../db");

class Users extends Sequelize.Model {}

Users.init(
  {
    user: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    nacionalidad: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    edad: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    favoritos: {
      type: Sequelize.ARRAY(Sequelize.JSON),
      defaultValue: [],
    },
  },
  { sequelize: db, modelName: "users" }
);

module.exports = Users;
