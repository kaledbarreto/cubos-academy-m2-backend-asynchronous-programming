const express = require("express");
const axios = require("axios");
const fs = require("fs/promises");

const app = express();

app.get("/enderecos/:uf/:cidade/:logradouro", async (req, res) => {
  const uf = req.params.uf;
  const cidade = req.params.cidade;
  const logradouro = req.params.logradouro;

  const arquivo = JSON.parse(await fs.readFile("./classe-02/enderecos.json"));

  const achei = arquivo.find(a => a.logradouro === logradouro);

  if (achei) {
    res.json(achei);
    return
  } else {
    const response = await axios.get(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`);

    arquivo.push(response.data)
    fs.writeFile("./classe-02/enderecos.json", JSON.stringify(arquivo));

    res.json({
      Endereço: response.data
    });
  }
});

app.get("/enderecos/:cep", async (req, res) => {
  const cep = req.params.cep;

  const arquivo = JSON.parse(await fs.readFile("./classe-02/enderecos.json"));

  const achei = arquivo.find(a => a.cep.replace("-", "") === cep);

  if (achei) {
    res.json(achei);
    return
  } else {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    arquivo.push(response.data)
    fs.writeFile("./classe-02/enderecos.json", JSON.stringify(arquivo));

    res.json({
      Endereço: response.data
    });
  }
});

app.listen(8000);