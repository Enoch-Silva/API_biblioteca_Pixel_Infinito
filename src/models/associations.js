const Livro = require("./Livro");
const Autor = require("./Autor");
const LivroAutor = require("./LivroAutor");

Livro.belongsToMany(Autor, { through: LivroAutor, foreignKey: "livroId" });
Autor.belongsToMany(Livro, { through: LivroAutor, foreignKey: "autorId" });

module.exports = { Livro, Autor };
