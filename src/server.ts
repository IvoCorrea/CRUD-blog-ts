import { categoriesController } from "./controllers/categories/Categories.controller";
import { articlesController } from "./controllers/articles/Articles.controller";
import express, { Application } from "express";
import { resolve } from "path";

const app: Application = express();
const Port: number = 9090;

// Static Folder
app.use(express.static("public"));

// View Engine
app.set("views", resolve("src/views"));
app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  res.render("index");
});

// Controllers
categoriesController(app);
articlesController(app);

app.listen(Port, () => console.log(`http://localhost:${Port}`));