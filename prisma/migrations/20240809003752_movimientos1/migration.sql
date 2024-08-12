-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- CreateTable
CREATE TABLE `TipoMovimiento` (
    `idTipoMovimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoMovimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EstadoMovimiento` (
    `idEstadoMovimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEstadoMovimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movimientos` (
    `idMovimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `idTipoMovimiento` INTEGER NOT NULL,
    `idEstadoMovimiento` INTEGER NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL,
    `idUsuarioCreacion` INTEGER NOT NULL,
    `motivo` VARCHAR(191) NOT NULL,
    `idInfoCaja` INTEGER NOT NULL,

    PRIMARY KEY (`idMovimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
