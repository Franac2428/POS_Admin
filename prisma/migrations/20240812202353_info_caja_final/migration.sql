/*
  Warnings:

  - You are about to drop the `infocajadetalle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `infocajadetalletipos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `infocajadetalle` DROP FOREIGN KEY `InfoCajaDetalle_idInfoCajaDetalleTipo_fkey`;

-- DropForeignKey
ALTER TABLE `infocajadetalle` DROP FOREIGN KEY `InfoCajaDetalle_idInfoCaja_fkey`;

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- DropTable
DROP TABLE `infocajadetalle`;

-- DropTable
DROP TABLE `infocajadetalletipos`;
