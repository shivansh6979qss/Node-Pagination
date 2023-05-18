const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const users = require("./data");
const paginateData = require("./middleware/Pagination");
const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.get("/users", paginateData(users), (req, res) => {
  res.status(200).json(res.paginatedResults);
});

app.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCCESSFULLY ON PORT ${PORT}`);
});
