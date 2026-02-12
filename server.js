const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/alo", (req, res) => {
  res.json({ mensagem: "Alô mundo" });
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
