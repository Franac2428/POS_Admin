-- CreateTable
CREATE TABLE `Proveedores` (
    `ProveedorID` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(191) NOT NULL,
    `Direccion` VARCHAR(191) NULL,
    `Telefono` VARCHAR(191) NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Contacto` VARCHAR(191) NULL,

    UNIQUE INDEX `Proveedores_Email_key`(`Email`),
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

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_ProveedorID_fkey` FOREIGN KEY (`ProveedorID`) REFERENCES `Proveedores`(`ProveedorID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesPedido` ADD CONSTRAINT `DetallesPedido_PedidoID_fkey` FOREIGN KEY (`PedidoID`) REFERENCES `Pedidos`(`PedidoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallesPedido` ADD CONSTRAINT `DetallesPedido_ProductoID_fkey` FOREIGN KEY (`ProductoID`) REFERENCES `Productos`(`ProductoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_CategoriaID_fkey` FOREIGN KEY (`CategoriaID`) REFERENCES `CategoriasProducto`(`CategoriaProductoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Productos` ADD CONSTRAINT `Productos_ProveedorID_fkey` FOREIGN KEY (`ProveedorID`) REFERENCES `Proveedores`(`ProveedorID`) ON DELETE RESTRICT ON UPDATE CASCADE;
