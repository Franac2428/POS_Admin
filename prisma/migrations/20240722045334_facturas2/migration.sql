/*
  Warnings:

  - You are about to alter the column `cantidad` on the `detallesfactura` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,5)`.
  - You are about to alter the column `precio` on the `detallesfactura` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,5)`.
  - You are about to alter the column `pagadoCon` on the `facturas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,5)`.
  - You are about to alter the column `total` on the `facturas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,5)`.
  - You are about to alter the column `vuelto` on the `facturas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,5)`.

*/
-- AlterTable
ALTER TABLE `detallesfactura` MODIFY `cantidad` DECIMAL(18, 5) NOT NULL,
    MODIFY `precio` DECIMAL(18, 5) NOT NULL;

-- AlterTable
ALTER TABLE `facturas` MODIFY `pagadoCon` DECIMAL(18, 5) NOT NULL,
    MODIFY `total` DECIMAL(18, 5) NOT NULL,
    MODIFY `vuelto` DECIMAL(18, 5) NOT NULL;

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;
