/*
  Warnings:

  - Added the required column `Apellido` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Direccion` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Telefono` to the `Usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `Apellido` VARCHAR(191) NOT NULL,
    ADD COLUMN `Direccion` VARCHAR(191) NOT NULL,
    ADD COLUMN `Telefono` VARCHAR(191) NOT NULL,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
