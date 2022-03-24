const fs = require("fs");

//Leituras sincronas (c/ arquivos exteriores)
// console.log("Antes de ler");
// console.log(fs.readFileSync("a.txt").toString());
// console.log("Depois de ler");



//Leituras assincronas (c/ arquivos exteriores)
console.log("antes de ler");

fs.readFile("a.txt", (err, data) => {
  if (err) {
    console.log("Deu erro", err);
  } else {
    console.log(data.toString()); //Tem que passar o toString, para converter.
  }
});

fs.readFile("b.txt", (err, data) => {
  if (err) {
    console.log("Deu erro", err);
  } else {
    console.log(data.toString()); //Tem que passar o toString, para converter.
  }
});

fs.readFile("c.txt", (err, data) => {
  if (err) {
    console.log("Deu erro", err);
  } else {
    console.log(data.toString()); //Tem que passar o toString, para converter.
  }
});

console.log("Depois de ler"); //Enquanto esta lendo o arquivo executa o "depois de ler"