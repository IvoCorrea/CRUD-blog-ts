export type Article = {
    id: number,
    title: string,
    body: string,
    slug: string,
    createdAt: Date,
    updatedAt: Date,
    categorieId: number
};

export type Categorie = {
    id: string,
    title: string,
    slug: string,

    createdAt: Date,
    updatedAt: Date,
    article: Article[]
};
