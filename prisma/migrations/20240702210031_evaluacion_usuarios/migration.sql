-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `observaciones` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `puntajeEvaluacion` INTEGER NOT NULL DEFAULT 0;
