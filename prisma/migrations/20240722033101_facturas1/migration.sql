-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- CreateTable
CREATE TABLE `MedioPago` (
    `idMedioPago` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idMedioPago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facturas` (
    `idFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `clienteId` INTEGER NOT NULL,
    `fechaEmision` DATETIME(3) NOT NULL,
    `documentoJson` JSON NOT NULL,
    `observaciones` VARCHAR(191) NOT NULL,
    `idMedioPago` INTEGER NOT NULL,
    `Total` DECIMAL(65, 30) NOT NULL,

    INDEX `idx_idCliente`(`clienteId`),
    PRIMARY KEY (`idFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetallesFactura` (
    `idDetalleFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `idFactura` INTEGER NOT NULL,
    `cantidad` DECIMAL(65, 30) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(65, 30) NOT NULL,
    `idProductoVenta` INTEGER NOT NULL,

    INDEX `idx_idFactura`(`idFactura`),
    PRIMARY KEY (`idDetalleFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Facturas` ADD CONSTRAINT `Facturas_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Clientes`(`clienteId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesFactura` ADD CONSTRAINT `DetallesFactura_idFactura_fkey` FOREIGN KEY (`idFactura`) REFERENCES `Facturas`(`idFactura`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesFactura` ADD CONSTRAINT `DetallesFactura_idProductoVenta_fkey` FOREIGN KEY (`idProductoVenta`) REFERENCES `ProductoVenta`(`idProductoVenta`) ON DELETE RESTRICT ON UPDATE CASCADE;
