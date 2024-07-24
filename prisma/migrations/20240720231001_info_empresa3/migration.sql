/*
  Warnings:

  - Added the required column `logo` to the `InfoEmpresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoImagen` to the `InfoEmpresa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `infoempresa` ADD COLUMN `logo` LONGBLOB NOT NULL,
    ADD COLUMN `tipoImagen` VARCHAR(191) NOT NULL;
