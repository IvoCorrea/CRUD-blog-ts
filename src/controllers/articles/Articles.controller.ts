import { Request, Response, Application } from "express";

// Prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function articlesController(app: Application) {

    app.get(("/articles"), (req: Request, res: Response) => {

        const articlesData = prisma.articles.findMany({ include: { categorie: true } })

        res.json(articlesData);
    });
};