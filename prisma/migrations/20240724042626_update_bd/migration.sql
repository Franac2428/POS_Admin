-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- CreateTable
CREATE TABLE `Asistencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empleadoId` INTEGER NOT NULL,
    `entrada` DATETIME(3) NOT NULL,
    `salida` DATETIME(3) NULL,
    `observacion` VARCHAR(191) NULL,
    `fecha` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Asistencia_fecha_key`(`fecha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Metas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empleadoId` INTEGER NOT NULL,
    `observaciones` VARCHAR(191) NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Asistencia` ADD CONSTRAINT `Asistencia_empleadoId_fkey` FOREIGN KEY (`empleadoId`) REFERENCES `usuarios`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Metas` ADD CONSTRAINT `Metas_empleadoId_fkey` FOREIGN KEY (`empleadoId`) REFERENCES `usuarios`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
