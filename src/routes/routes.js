const express = require("express");
const { Livro, Autor } = require("../models/associations");
const apiKeyMiddleware = require("../middleware/apiKeyMiddleware");
const router = express.Router();

// ROTAS PARA LIVROS --------------------------------------------------------------

// Criar um novo livro sem autores
router.post("/livro/novo", apiKeyMiddleware, async (req, res) => {
  const { nomeLivro } = req.body;
  if (!nomeLivro) {
    res.status(400).json({ message: "O Nome do livro é obrigatorio" });
    return;
  }
  const novoLivro = await Livro.create({
    nome: nomeLivro,
  });
  res.status(201).json(novoLivro);
});

// Criar um novo livro e seus autores
router.post("/livros", apiKeyMiddleware, async (req, res) => {
  const { nomeLivro, autores } = req.body;
  if (!nomeLivro) {
    res.status(400).json({ message: "O Nome do livro é obrigatorio" });
    return;
  }
  const novoLivro = await Livro.create(
    {
      nome: nomeLivro,
      autores: autores.map((autor) => ({ nome: autor.nome })),
    },
    {
      include: [Autor],
    }
  );
  res.status(201).json(novoLivro);
});

// Pegar todos os livro e seus autores
router.get("/livros", apiKeyMiddleware, async (req, res) => {
  const livros = await Livro.findAll({ include: [Autor] });
  res.status(200).json(livros);
});

// Pegar um detalhes de um livro especifico
router.get("/livros/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;
  const livro = await Livro.findByPk(id, { include: [Autor] });
  res.status(200).json(livro);
});

// atualizar o nome de um livro
router.put("/livro/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    const [updated] = await Livro.update({ nome }, { where: { id } });
    if (updated) {
      const updatedBook = await Livro.findByPk(id);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } else {
      res.status(404).json({ error: "Livro não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar livro" });
  }
});

// Deletar um livro
router.delete("/livro/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const apagado = await Livro.destroy({
      where: { id },
    });

    if (apagado) {
      res.status(200).send({ message: "Livro apagado com sucesso!" });
    } else {
      res.status(404).json({ error: "Livro não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Livro" });
  }
});

// -------------------------------------------------------------------------------

// ROTAS PARA AUTORES

// Criar um novo autor sem livros
router.post("/autor/novo", apiKeyMiddleware, async (req, res) => {
  const { nomeAutor } = req.body;
  if (!nomeAutor) {
    res.status(400).json({ message: "O Nome do Autor é obrigatorio" });
    return;
  }
  const novoAutor = await Autor.create({
    nome: nomeAutor,
  });
  res.status(201).json(novoAutor);
});

// Criar um novo autor e seus livros
router.post("/autores", apiKeyMiddleware, async (req, res) => {
  const { nomeAutor, livros } = req.body;
  if (!nomeAutor) {
    res.status(400).json({ message: "O Nome do autor é obrigatorio" });
    return;
  }
  const novoAutor = await Autor.create(
    {
      nome: nomeAutor,
      autores: livros.map((livro) => ({ nome: livro.nome })),
    },
    {
      include: [Livro],
    }
  );
  res.status(201).json(novoAutor);
});

// Pegar todos os autores e seus livros
router.get("/autores", apiKeyMiddleware, async (req, res) => {
  const autores = await Autor.findAll({ include: [Livro] });
  res.status(200).json(autores);
});

// Pegar um detalhes de um autor especifico
router.get("/autores/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;
  const autor = await Autor.findByPk(id, { include: [Livro] });
  res.status(200).json(autor);
});

// atualizar o nome de um Autor
router.put("/autor/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    const [updated] = await Autor.update({ nome }, { where: { id } });
    if (updated) {
      const updatedAuthor = await Livro.findByPk(id);
      res.status(200).json({
        message: "Autor atualizado com sucesso!",
      });
    } else {
      res.status(404).json({ error: "Autor não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar Autor" });
  }
});

// Deletar um livro
router.delete("/autor/:id", apiKeyMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const apagado = await Autor.destroy({
      where: { id },
    });

    if (apagado) {
      res.status(200).send({ message: "Autor apagado com sucesso!" });
    } else {
      res.status(404).json({ error: "Autor não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar Autor" });
  }
});

// ------------------------------------------------------------------------------

// Associar um autor existente a um livro
router.post(
  "/livros/:livroId/autores/:autorId",
  apiKeyMiddleware,
  async (req, res) => {
    const { livroId, autorId } = req.params;

    // Encontre o livro e o autor pelos IDs
    const livro = await Livro.findByPk(livroId);
    const autor = await Autor.findByPk(autorId);

    if (!livro || !autor) {
      return res.status(404).json({ error: "Livro ou Autor não encontrado" });
    }

    // Adicionar o autor ao livro
    await livro.addAutor(autor);
    res.status(201).json({ message: "Autor associado ao Livro com sucesso" });
  }
);

// Associar um livro existente a um autor
router.post(
  "/autores/:autorId/livros/:livroId",
  apiKeyMiddleware,
  async (req, res) => {
    const { autorId, livroId } = req.params;

    // Encontre o livro e o autor pelos IDs
    const autor = await Autor.findByPk(autorId);
    const livro = await Livro.findByPk(livroId);

    if (!livro || !autor) {
      return res.status(404).json({ error: "Livro ou Autor não encontrado" });
    }

    // Adicionar o livro ao autor
    await autor.addLivro(livro);
    res.status(201).json({ message: "Livro associado ao Autor com sucesso" });
  }
);

module.exports = router;
