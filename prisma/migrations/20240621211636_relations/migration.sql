/*
  Warnings:

  - Added the required column `categorieId` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` ADD COLUMN `categorieId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Articles` ADD CONSTRAINT `Articles_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
