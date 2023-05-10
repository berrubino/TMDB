const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {
  encryptedPw = (password, salt) => bcrypt.hash(password, salt);

  validatepassword = (password) => {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  };
}

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

    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

Users.addHook("beforeValidate", (user) => {
  user.salt = bcrypt.genSaltSync(8);
  return user
    .encryptedPw(user.password, user.salt)
    .then((hash) => (user.password = hash));
});

module.exports = Users;
