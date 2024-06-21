import { Request, Response, Application } from "express";

export function articlesController(app: Application) {

    app.get(("/articles"), (req, res) => {

        res.json({
            message: "Articles Controller"
        });

    });
};