//index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const todoRouter = require("./routes/todo");
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("TODO API project is up and running");
});

app.use("/todos", todoRouter);

const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
