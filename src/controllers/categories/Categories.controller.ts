import { Request, Response, Application } from "express";

export function categoriesController(app: Application) {

    app.get(("/categories"), (req: Request, res: Response) => {

        res.json({
            message: "categories Controller"
        });
        
    });
};

