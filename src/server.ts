import { categoriesController } from "./controllers/categories/Categories.controller";
import { articlesController } from "./controllers/articles/articles.controller";
import express, { Application } from "express";
import path from "path";

const app: Application = express();
const Port: number = 9090;

// Static Folder
app.use(express.static("public"));

// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Controllers
categoriesController(app);
articlesController(app);

app.listen(Port, () => console.log(`http://localhost:${Port}`));