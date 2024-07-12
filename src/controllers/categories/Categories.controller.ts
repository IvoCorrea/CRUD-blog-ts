import { Request, Response, Application } from "express";

// Prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function categoriesController(app: Application) {

    app.get(("/categories"), async (req: Request, res: Response) => {

        const categoriesData = await prisma.categories.findMany();

        res.json(categoriesData);

    });

    app.post(("/admin/categories"), async (req: Request, res: Response) => {
        
    })
};

