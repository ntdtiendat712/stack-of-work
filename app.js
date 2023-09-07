const hbs = require("express-hbs");
const express = require("express");
const app = express();
const port = 3000;
const LOCAL_HOST = `http://localhost:${port}`;

const viewsDir = "./views";

app.engine(
  "hbs",
  hbs.express4({
    partialsDir: viewsDir,
  })
);
app.set("view engine", "hbs");
app.set("views", viewsDir);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Stack of work",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${LOCAL_HOST}`);
  require("child_process").exec(`start ${LOCAL_HOST}`);
});
