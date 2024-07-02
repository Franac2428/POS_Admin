/*
  Warnings:

  - Added the required column `tipoImagen` to the `ProductoVenta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productoventa` ADD COLUMN `tipoImagen` VARCHAR(191) NOT NULL;
