const database = require("./db");
const { Livro, Autor } = require("./models/associations");

database.sync({ force: true }).then(() => {
  console.log("Database synchronized");
});
