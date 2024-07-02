-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `proveedor` VARCHAR(191) NOT NULL,
    `medioPedido` VARCHAR(191) NOT NULL,
    `productos` JSON NOT NULL,
    `observaciones` VARCHAR(191) NULL,
    `estado` ENUM('EN_PROGRESO', 'CANCELADO', 'FINALIZADO') NOT NULL DEFAULT 'EN_PROGRESO',
    `fechaFinalizacion` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
