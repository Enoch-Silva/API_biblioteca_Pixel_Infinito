require("dotenv").config();
const express = require("express");

// Middleware para verificar a chave da API
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.query.api_key;
  const validApiKey = process.env.API_KEY; // Obter a chave da API do arquivo .env

  if (apiKey === validApiKey) {
    next();
  } else {
    res.status(401).json({ error: "Chave de API inválida" });
  }
};

module.exports = apiKeyMiddleware;
