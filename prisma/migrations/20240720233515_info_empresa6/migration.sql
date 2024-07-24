-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null,
    ALTER COLUMN `tipoImagen` DROP DEFAULT;
