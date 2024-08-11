/*
  Warnings:

  - You are about to alter the column `HoraInicio` on the `horario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `HoraFin` on the `horario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to drop the `asignacionhorario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[empleadoId,fecha]` on the table `Asistencia` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `asignacionhorario` DROP FOREIGN KEY `AsignacionHorario_EmpleadoID_fkey`;

-- DropForeignKey
ALTER TABLE `asignacionhorario` DROP FOREIGN KEY `AsignacionHorario_HorarioID_fkey`;

-- DropIndex
DROP INDEX `Asistencia_fecha_key` ON `asistencia`;

-- AlterTable
ALTER TABLE `horario` MODIFY `HoraInicio` DATETIME(3) NOT NULL,
    MODIFY `HoraFin` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `horarioId` INTEGER NULL;

-- DropTable
DROP TABLE `asignacionhorario`;

-- CreateIndex
CREATE UNIQUE INDEX `Asistencia_empleadoId_fecha_key` ON `Asistencia`(`empleadoId`, `fecha`);

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_horarioId_fkey` FOREIGN KEY (`horarioId`) REFERENCES `Horario`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;
