const axios = require("axios");

function obterLogradouro(cep) {
  const responsePromise = axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  const logradouroPromise = responsePromise.then(response => response.data.logradouro);

  return logradouroPromise;
}

async function obterLogradouro2(cep) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`); //Espera a promessa se concretizar, para depois continuar
  return response.data.logradouro;
}

//É o mais recomendado.
async function exibirLogradouros1(ceps) {
  for (const cep of ceps) {
    console.log(cep, "=>", await obterLogradouro2(cep));
  }
}

//Não use - ForEach não funciona bem com async/await
async function exibirLogradouros2(ceps) {
  ceps.forEach(async (cep) => {
    console.log(cep, "=>", await obterLogradouro(cep));
  });
}

//O map não funciona bem tbm
//O promisse all resolve isso, pois ele gera uma única promessa que espera todas as promessas da lista finalizarem.
//Por mais que seja mais rápido, o promise all não é recomendado em alguns casos, como muitas requisições ou ate mesmo ordem inesperada.
async function exibirLogradouros3(ceps) {
  await Promise.all(ceps.map(async (cep) => {
    console.log(cep, "=>", await obterLogradouro(cep));
  }));
}

exibirLogradouros3(["40140650", "01001000"]).then(() => console.log("FIM"));

// obterLogradouro2("01001000").then((logradouro) => console.log(logradouro));

// obterLogradouro("40140650").then((logradouro) => console.log(logradouro));