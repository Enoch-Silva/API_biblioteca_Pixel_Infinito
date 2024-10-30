const { DataTypes } = require("sequelize");
const Autor = require("./Autor");
const database = require("../db");

const Livro = database.define("livro", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Livro;
