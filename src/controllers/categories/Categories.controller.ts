import { Request, Response, Application } from "express";

// Prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function categoriesController(app: Application) {

    app.get(("/categories"), (req: Request, res: Response) => {

        const categoriesData = prisma.categories.findMany();

        res.json(categoriesData);

    });
};

