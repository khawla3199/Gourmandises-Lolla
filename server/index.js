const express = require("express");
const cors = require("cors");
const db = require("./database/sequelize/index.js")
const pastryRouter = require("./router.js")

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use ('/postr',pastryRouter)
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
