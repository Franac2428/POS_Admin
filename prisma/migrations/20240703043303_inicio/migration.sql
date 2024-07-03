-- CreateTable
CREATE TABLE `usuarios` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `resetPasswordToken` VARCHAR(191) NULL,
    `resetPasswordTokenExpiry` DATETIME(3) NULL,
    `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    `emailVerificationToken` VARCHAR(191) NULL,
    `roleId` INTEGER NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    UNIQUE INDEX `usuarios_username_key`(`username`),
    UNIQUE INDEX `usuarios_resetPasswordToken_key`(`resetPasswordToken`),
    UNIQUE INDEX `usuarios_emailVerificationToken_key`(`emailVerificationToken`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusAuditoriaLogin` (
    `IdStatusAuditoriaLogin` INTEGER NOT NULL AUTO_INCREMENT,
    `Status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`IdStatusAuditoriaLogin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuditoriaLogin` (
    `IdAuditoriaLogin` INTEGER NOT NULL AUTO_INCREMENT,
    `FechaLogin` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Usuario` VARCHAR(191) NOT NULL,
    `Clave` VARCHAR(191) NULL,
    `IdStatusAuditoriaLogin` INTEGER NOT NULL,
    `FechaEstadoActualizado` DATETIME(3) NULL,
    `Mensaje` VARCHAR(191) NULL,

    PRIMARY KEY (`IdAuditoriaLogin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `IdRole` INTEGER NOT NULL AUTO_INCREMENT,
    `Descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`IdRole`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `clienteId` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `eliminado` BOOLEAN NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `idUsuarioCreacion` INTEGER NOT NULL,
    `rfc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`clienteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriaProdVenta` (
    `idCategoriaProdVenta` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `estado` BOOLEAN NOT NULL,

    PRIMARY KEY (`idCategoriaProdVenta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductoVenta` (
    `idProductoVenta` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `cantidad` DECIMAL(18, 3) NOT NULL,
    `cantidadMinima` DECIMAL(18, 3) NOT NULL,
    `precio` DECIMAL(18, 3) NOT NULL,
    `idUsuarioCreacion` INTEGER NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `eliminado` BOOLEAN NOT NULL,
    `idCategoriaProdVenta` INTEGER NOT NULL,
    `imagen` LONGBLOB NOT NULL,
    `tipoImagen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idProductoVenta`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`IdRole`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditoriaLogin` ADD CONSTRAINT `AuditoriaLogin_IdStatusAuditoriaLogin_fkey` FOREIGN KEY (`IdStatusAuditoriaLogin`) REFERENCES `StatusAuditoriaLogin`(`IdStatusAuditoriaLogin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoVenta` ADD CONSTRAINT `ProductoVenta_idCategoriaProdVenta_fkey` FOREIGN KEY (`idCategoriaProdVenta`) REFERENCES `CategoriaProdVenta`(`idCategoriaProdVenta`) ON DELETE RESTRICT ON UPDATE CASCADE;
