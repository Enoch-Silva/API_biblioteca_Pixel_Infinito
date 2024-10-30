const { DataTypes } = require("sequelize");
const database = require("../db");
const Livro = require("./Livro");
const Autor = require("./Autor");

const LivroAutor = database.define("livroAutor", {
  livroId: {
    type: DataTypes.INTEGER,
    references: {
      model: Livro,
      key: "id",
    },
  },
  autorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Autor,
      key: "id",
    },
  },
});

Livro.belongsToMany(Autor, { through: LivroAutor, foreignKey: "livroId" });
Autor.belongsToMany(Livro, { through: LivroAutor, foreignKey: "autorId" });

module.exports = LivroAutor;
