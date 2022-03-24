const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  const offset = req.query.offset;
  const limit = req.query.limit;

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

  res.json({
    Pokemons: response.data.results,
  });
});

app.get("/:idOuNome", async (req, res) => {
  const idOuNome = req.params.idOuNome;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`);

  res.json({
    ID: response.data.id,
    Nome: response.data.name,
    Altura: response.data.height,
    Largura: response.data.weight,
    Experiência_Base: response.data.base_experience,
    Formas: response.data.forms,
    Habilidades: response.data.abilities,
    Espécies: response.data.species
  });
});

app.listen(8080);