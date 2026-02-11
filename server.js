const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // libera para qualquer origem

app.get('/api/alo', (req, res) => {
  res.json({ mensagem: "Alô mundo" });
});

app.listen(8080, () => {
  console.log("API rodando na porta 8080");
});
