/*
  Warnings:

  - Added the required column `imagen` to the `ProductoVenta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productoventa` ADD COLUMN `imagen` VARCHAR(191) NOT NULL;
