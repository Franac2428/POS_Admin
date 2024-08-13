/*
  Warnings:

  - A unique constraint covering the columns `[SitioWeb]` on the table `Proveedores` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- AlterTable
ALTER TABLE `proveedores` ADD COLUMN `SitioWeb` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Proveedores_SitioWeb_key` ON `Proveedores`(`SitioWeb`);
