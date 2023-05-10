const Sequelize = require("sequelize");
const db = require("../db");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    content_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    poster: {
      type: Sequelize.STRING,
      /* defaultValue:noImg */
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
