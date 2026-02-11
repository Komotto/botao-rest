const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.listen(8080, () => {
  console.log('Frontend rodando na porta 8080');
});
