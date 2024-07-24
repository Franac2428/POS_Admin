/*
  Warnings:

  - You are about to drop the column `Total` on the `facturas` table. All the data in the column will be lost.
  - Added the required column `pagadoCon` to the `Facturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Facturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vuelto` to the `Facturas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `facturas` DROP COLUMN `Total`,
    ADD COLUMN `pagadoCon` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `total` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `vuelto` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;
