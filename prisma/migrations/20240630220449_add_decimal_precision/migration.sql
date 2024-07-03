/*
  Warnings:

  - You are about to alter the column `cantidad` on the `productoventa` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,3)`.
  - You are about to alter the column `cantidadMinima` on the `productoventa` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,3)`.
  - You are about to alter the column `precio` on the `productoventa` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,3)`.

*/
-- AlterTable
ALTER TABLE `productoventa` MODIFY `cantidad` DECIMAL(18, 3) NOT NULL,
    MODIFY `cantidadMinima` DECIMAL(18, 3) NOT NULL,
    MODIFY `precio` DECIMAL(18, 3) NOT NULL;
