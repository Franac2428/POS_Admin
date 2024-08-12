/*
  Warnings:

  - Added the required column `monto` to the `Movimientos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- AlterTable
ALTER TABLE `movimientos` ADD COLUMN `monto` DECIMAL(18, 5) NOT NULL;
