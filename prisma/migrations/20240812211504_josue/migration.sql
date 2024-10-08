/*
  Warnings:

  - The primary key for the `horario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Dia` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `HoraFin` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `HoraInicio` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `horario` table. All the data in the column will be lost.
  - You are about to drop the column `horarioId` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuarioId,dia]` on the table `Horario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `estadoFac` to the `Facturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dia` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esDiaLibre` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Horario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Horario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_horarioId_fkey`;

-- AlterTable
ALTER TABLE `facturas` ADD COLUMN `estadoFac` ENUM('ACTIVA', 'PAGADA', 'NULA') NOT NULL;

-- AlterTable
ALTER TABLE `horario` DROP PRIMARY KEY,
    DROP COLUMN `Dia`,
    DROP COLUMN `HoraFin`,
    DROP COLUMN `HoraInicio`,
    DROP COLUMN `Id`,
    ADD COLUMN `dia` VARCHAR(191) NOT NULL,
    ADD COLUMN `esDiaLibre` BOOLEAN NOT NULL,
    ADD COLUMN `fin` VARCHAR(191) NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `inicio` VARCHAR(191) NULL,
    ADD COLUMN `usuarioId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `horarioId`;

-- CreateIndex
CREATE UNIQUE INDEX `Horario_usuarioId_dia_key` ON `Horario`(`usuarioId`, `dia`);

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
