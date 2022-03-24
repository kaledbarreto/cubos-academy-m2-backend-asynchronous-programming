const fs = require("fs");

//Copiando um arquivo para outro Síncrono
// const conteudo = fs.readFileSync("texto.txt");
// fs.writeFileSync("novoTexto.txt", conteudo);

//Copiando um arquivo para outro Assincrono
fs.readFile("texto.txt", (err, data) => {
  if (err) {
    console.error("Erro:", err);
  } else {
    fs.writeFileSync("novoTexto.txt", data, (err) => {
      if (err) {
        console.error("Erro na escrita:", err);
      } else {
        console.log("Escreveu com sucesso");
      }
    });
  }
});

