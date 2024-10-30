const { DataTypes } = require("sequelize");
const Livro = require("./Livro");
const database = require("../db");

const Autor = database.define("autor", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Autor;
