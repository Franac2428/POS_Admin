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
CREATE TABLE `Asistencia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empleadoId` INTEGER NOT NULL,
    `entrada` DATETIME(3) NOT NULL,
    `salida` DATETIME(3) NULL,
    `observacion` VARCHAR(191) NULL,
    `fecha` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Asistencia_empleadoId_fecha_key`(`empleadoId`, `fecha`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Metas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `empleadoId` INTEGER NOT NULL,
    `asunto` VARCHAR(191) NOT NULL,
    `observaciones` VARCHAR(191) NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
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

-- CreateTable
CREATE TABLE `Horario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `dia` VARCHAR(191) NOT NULL,
    `inicio` VARCHAR(191) NULL,
    `fin` VARCHAR(191) NULL,
    `esDiaLibre` BOOLEAN NOT NULL,

    UNIQUE INDEX `Horario_usuarioId_dia_key`(`usuarioId`, `dia`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `proveedorId` INTEGER NOT NULL,
    `medioPedido` VARCHAR(191) NOT NULL,
    `productos` JSON NOT NULL,
    `observaciones` VARCHAR(191) NULL,
    `estado` ENUM('EN_PROGRESO', 'CANCELADO', 'FINALIZADO') NOT NULL DEFAULT 'EN_PROGRESO',
    `fechaFinalizacion` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proveedores` (
    `ProveedorID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(191) NOT NULL,
    `Tipo` VARCHAR(191) NOT NULL DEFAULT 'Desconocido',
    `Direccion` VARCHAR(191) NULL,
    `Telefono` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NOT NULL,
    `SitioWeb` VARCHAR(191) NULL,
    `Contacto` VARCHAR(191) NULL,

    UNIQUE INDEX `Proveedores_Email_key`(`Email`),
    UNIQUE INDEX `Proveedores_SitioWeb_key`(`SitioWeb`),
    PRIMARY KEY (`ProveedorID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `PedidoID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProveedorID` INTEGER NOT NULL,
    `FechaEmision` DATETIME(3) NOT NULL,
    `FechaRecepcion` DATETIME(3) NULL,
    `Estado` VARCHAR(191) NOT NULL,
    `Observaciones` VARCHAR(191) NULL,

    PRIMARY KEY (`PedidoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetallesPedido` (
    `DetallePedidoID` INTEGER NOT NULL AUTO_INCREMENT,
    `PedidoID` INTEGER NOT NULL,
    `ProductoID` INTEGER NOT NULL,
    `Cantidad` INTEGER NOT NULL,
    `PrecioUnitario` DOUBLE NOT NULL,
    `IVA` DOUBLE NOT NULL,
    `Total` DOUBLE NOT NULL,

    PRIMARY KEY (`DetallePedidoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Productos` (
    `ProductoID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(191) NOT NULL,
    `Descripcion` VARCHAR(191) NULL,
    `PrecioCompra` DOUBLE NOT NULL,
    `PrecioVenta` DOUBLE NOT NULL,
    `Stock` INTEGER NOT NULL,
    `CategoriaID` INTEGER NOT NULL,
    `ProveedorID` INTEGER NOT NULL,
    `FechaIngreso` DATETIME(3) NOT NULL,
    `FechaCaducidad` DATETIME(3) NULL,
    `Estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ProductoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriasProducto` (
    `CategoriaProductoID` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreCategoria` VARCHAR(191) NOT NULL,
    `Descripcion` VARCHAR(191) NULL,

    PRIMARY KEY (`CategoriaProductoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfoEmpresa` (
    `idEmpresa` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `nombreComercial` VARCHAR(191) NOT NULL,
    `identificacion` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `logo` LONGBLOB NULL DEFAULT null,
    `tipoImagen` VARCHAR(191) NULL,

    PRIMARY KEY (`idEmpresa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `total` DECIMAL(18, 5) NOT NULL,
    `pagadoCon` DECIMAL(18, 5) NOT NULL,
    `vuelto` DECIMAL(18, 5) NOT NULL,
    `idInfoCaja` INTEGER NOT NULL,
    `estadoFac` ENUM('ACTIVA', 'PAGADA', 'NULA') NOT NULL,

    INDEX `idx_idCliente`(`clienteId`),
    PRIMARY KEY (`idFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetallesFactura` (
    `idDetalleFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `idFactura` INTEGER NOT NULL,
    `cantidad` DECIMAL(18, 5) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio` DECIMAL(18, 5) NOT NULL,
    `idProductoVenta` INTEGER NOT NULL,

    INDEX `idx_idFactura`(`idFactura`),
    PRIMARY KEY (`idDetalleFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InfoCaja` (
    `idInfoCaja` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaApertura` DATETIME(3) NOT NULL,
    `fechaCierre` DATETIME(3) NULL,
    `idUsuario` INTEGER NOT NULL,
    `fechaConsultaCaja` DATETIME(3) NOT NULL,
    `montoInicioCaja` DECIMAL(18, 5) NOT NULL,
    `montoCierreCaja` DECIMAL(18, 5) NULL,

    PRIMARY KEY (`idInfoCaja`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `monto` DECIMAL(18, 5) NOT NULL,

    PRIMARY KEY (`idMovimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`IdRole`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asistencia` ADD CONSTRAINT `Asistencia_empleadoId_fkey` FOREIGN KEY (`empleadoId`) REFERENCES `usuarios`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Metas` ADD CONSTRAINT `Metas_empleadoId_fkey` FOREIGN KEY (`empleadoId`) REFERENCES `usuarios`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AuditoriaLogin` ADD CONSTRAINT `AuditoriaLogin_IdStatusAuditoriaLogin_fkey` FOREIGN KEY (`IdStatusAuditoriaLogin`) REFERENCES `StatusAuditoriaLogin`(`IdStatusAuditoriaLogin`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductoVenta` ADD CONSTRAINT `ProductoVenta_idCategoriaProdVenta_fkey` FOREIGN KEY (`idCategoriaProdVenta`) REFERENCES `CategoriaProdVenta`(`idCategoriaProdVenta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Horario` ADD CONSTRAINT `Horario_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `Proveedores`(`ProveedorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesPedido` ADD CONSTRAINT `DetallesPedido_PedidoID_fkey` FOREIGN KEY (`PedidoID`) REFERENCES `Pedidos`(`PedidoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesPedido` ADD CONSTRAINT `DetallesPedido_ProductoID_fkey` FOREIGN KEY (`ProductoID`) REFERENCES `Productos`(`ProductoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_CategoriaID_fkey` FOREIGN KEY (`CategoriaID`) REFERENCES `CategoriasProducto`(`CategoriaProductoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_ProveedorID_fkey` FOREIGN KEY (`ProveedorID`) REFERENCES `Proveedores`(`ProveedorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facturas` ADD CONSTRAINT `Facturas_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Clientes`(`clienteId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Facturas` ADD CONSTRAINT `Facturas_idInfoCaja_fkey` FOREIGN KEY (`idInfoCaja`) REFERENCES `InfoCaja`(`idInfoCaja`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesFactura` ADD CONSTRAINT `DetallesFactura_idFactura_fkey` FOREIGN KEY (`idFactura`) REFERENCES `Facturas`(`idFactura`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesFactura` ADD CONSTRAINT `DetallesFactura_idProductoVenta_fkey` FOREIGN KEY (`idProductoVenta`) REFERENCES `ProductoVenta`(`idProductoVenta`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimientos` ADD CONSTRAINT `Movimientos_idTipoMovimiento_fkey` FOREIGN KEY (`idTipoMovimiento`) REFERENCES `TipoMovimiento`(`idTipoMovimiento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimientos` ADD CONSTRAINT `Movimientos_idEstadoMovimiento_fkey` FOREIGN KEY (`idEstadoMovimiento`) REFERENCES `EstadoMovimiento`(`idEstadoMovimiento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimientos` ADD CONSTRAINT `Movimientos_idInfoCaja_fkey` FOREIGN KEY (`idInfoCaja`) REFERENCES `InfoCaja`(`idInfoCaja`) ON DELETE RESTRICT ON UPDATE CASCADE;
