/*
  Warnings:

  - Added the required column `idInfoCaja` to the `Facturas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `facturas` ADD COLUMN `idInfoCaja` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- AddForeignKey
ALTER TABLE `Facturas` ADD CONSTRAINT `Facturas_idInfoCaja_fkey` FOREIGN KEY (`idInfoCaja`) REFERENCES `InfoCaja`(`idInfoCaja`) ON DELETE RESTRICT ON UPDATE CASCADE;
