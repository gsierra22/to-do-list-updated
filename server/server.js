//requires
const express = require("express");
const app = express();
const todo = require("./routes/todo.route");
const bodyParser = require("body-parser");
// uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/todo", todo);

//globals
const port = 5000;

//spin up server
app.listen(port, () => {
  console.log("spin up on:", port);
});
