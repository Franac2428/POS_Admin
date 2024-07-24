/*
  Warnings:

  - Added the required column `celular` to the `InfoEmpresa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `infoempresa` ADD COLUMN `celular` VARCHAR(191) NOT NULL;
