const express = require('express');
const path = require('path');

const app = express();

// Serve arquivos estáticos da pasta atual
app.use(express.static(__dirname));

// Opcional: rota raiz explícita
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
  console.log("Frontend rodando na porta 8080");
});
