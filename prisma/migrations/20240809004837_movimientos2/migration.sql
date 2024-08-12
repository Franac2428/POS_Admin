-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;

-- AddForeignKey
ALTER TABLE `Movimientos` ADD CONSTRAINT `Movimientos_idTipoMovimiento_fkey` FOREIGN KEY (`idTipoMovimiento`) REFERENCES `TipoMovimiento`(`idTipoMovimiento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimientos` ADD CONSTRAINT `Movimientos_idEstadoMovimiento_fkey` FOREIGN KEY (`idEstadoMovimiento`) REFERENCES `EstadoMovimiento`(`idEstadoMovimiento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Movimientos` ADD CONSTRAINT `Movimientos_idInfoCaja_fkey` FOREIGN KEY (`idInfoCaja`) REFERENCES `InfoCaja`(`idInfoCaja`) ON DELETE RESTRICT ON UPDATE CASCADE;
