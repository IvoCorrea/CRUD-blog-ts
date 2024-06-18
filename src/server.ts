import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const Port: number = 9090;

// Static Folder
app.use(express.static("public"));

// View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {

    return res.render("index");
});

app.listen(Port, () => console.log(`http://localhost:${Port}`))