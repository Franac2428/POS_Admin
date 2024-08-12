-- AlterTable
ALTER TABLE `infocaja` ADD COLUMN `montoCierreCaja` DECIMAL(18, 5) NULL;

-- AlterTable
ALTER TABLE `infoempresa` MODIFY `logo` LONGBLOB NULL DEFAULT null;
