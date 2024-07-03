/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: _prisma_migrations
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: auditorialogin
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `auditorialogin` (
  `IdAuditoriaLogin` int NOT NULL AUTO_INCREMENT,
  `FechaLogin` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `Usuario` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Clave` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IdStatusAuditoriaLogin` int NOT NULL,
  `FechaEstadoActualizado` datetime(3) DEFAULT NULL,
  `Mensaje` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`IdAuditoriaLogin`),
  KEY `AuditoriaLogin_IdStatusAuditoriaLogin_fkey` (`IdStatusAuditoriaLogin`),
  CONSTRAINT `AuditoriaLogin_IdStatusAuditoriaLogin_fkey` FOREIGN KEY (`IdStatusAuditoriaLogin`) REFERENCES `statusauditorialogin` (`IdStatusAuditoriaLogin`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: permiso
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `permiso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `permissionName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Permiso_permissionName_key` (`permissionName`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: role
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Role_roleName_key` (`roleName`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: rolpermiso
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `rolpermiso` (
  `roleId` int NOT NULL,
  `permissionId` int NOT NULL,
  PRIMARY KEY (`roleId`, `permissionId`),
  KEY `RolPermiso_permissionId_fkey` (`permissionId`),
  CONSTRAINT `RolPermiso_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `permiso` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `RolPermiso_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: statusauditorialogin
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `statusauditorialogin` (
  `IdStatusAuditoriaLogin` int NOT NULL AUTO_INCREMENT,
  `Status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdStatusAuditoriaLogin`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: usuariorole
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `usuariorole` (
  `usuarioId` int NOT NULL,
  `roleId` int NOT NULL,
  PRIMARY KEY (`usuarioId`, `roleId`),
  KEY `UsuarioRole_roleId_fkey` (`roleId`),
  CONSTRAINT `UsuarioRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `UsuarioRole_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`Id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: usuarios
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resetPasswordToken` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resetPasswordTokenExpiry` datetime(3) DEFAULT NULL,
  `emailVerified` tinyint(1) NOT NULL DEFAULT '0',
  `emailVerificationToken` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Usuarios_email_key` (`email`),
  UNIQUE KEY `Usuarios_username_key` (`username`),
  UNIQUE KEY `Usuarios_resetPasswordToken_key` (`resetPasswordToken`),
  UNIQUE KEY `Usuarios_emailVerificationToken_key` (`emailVerificationToken`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: _prisma_migrations
# ------------------------------------------------------------

INSERT INTO
  `_prisma_migrations` (
    `id`,
    `checksum`,
    `finished_at`,
    `migration_name`,
    `logs`,
    `rolled_back_at`,
    `started_at`,
    `applied_steps_count`
  )
VALUES
  (
    'a5068ea5-8e9b-48fa-a4ba-dc963e6b7269',
    '81414ec3db883cf0ccd46eb8f8cb4d141416c97955f27ed7339e2dd269667048',
    '2024-06-12 05:06:09.923',
    '20240612050608_main',
    NULL,
    NULL,
    '2024-06-12 05:06:08.733',
    1
  );
INSERT INTO
  `_prisma_migrations` (
    `id`,
    `checksum`,
    `finished_at`,
    `migration_name`,
    `logs`,
    `rolled_back_at`,
    `started_at`,
    `applied_steps_count`
  )
VALUES
  (
    'cae7b9c1-8cda-4ca8-a061-3c7222f90e84',
    '77fd34ef2253d2048b3cdcf6855ef2624ef5121375bf14a166a9cb1cd26ad88c',
    '2024-06-12 05:06:08.094',
    '20240607181538_user',
    NULL,
    NULL,
    '2024-06-12 05:06:07.992',
    1
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: auditorialogin
# ------------------------------------------------------------

INSERT INTO
  `auditorialogin` (
    `IdAuditoriaLogin`,
    `FechaLogin`,
    `Usuario`,
    `Clave`,
    `IdStatusAuditoriaLogin`,
    `FechaEstadoActualizado`,
    `Mensaje`
  )
VALUES
  (
    1,
    '2024-06-12 05:08:53.870',
    'isafact24@gmail.com',
    '',
    3,
    '2024-06-12 05:08:53.969',
    'Ingreso satisfactorio'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: permiso
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: role
# ------------------------------------------------------------

INSERT INTO
  `role` (`id`, `roleName`, `description`)
VALUES
  (1, 'Admin', 'Rol para el admin');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: rolpermiso
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: statusauditorialogin
# ------------------------------------------------------------

INSERT INTO
  `statusauditorialogin` (`IdStatusAuditoriaLogin`, `Status`)
VALUES
  (1, 'Pendiente');
INSERT INTO
  `statusauditorialogin` (`IdStatusAuditoriaLogin`, `Status`)
VALUES
  (2, 'Fallido');
INSERT INTO
  `statusauditorialogin` (`IdStatusAuditoriaLogin`, `Status`)
VALUES
  (3, 'Satisfactorio');
INSERT INTO
  `statusauditorialogin` (`IdStatusAuditoriaLogin`, `Status`)
VALUES
  (4, 'No Existe');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: usuariorole
# ------------------------------------------------------------


# ------------------------------------------------------------
# DATA DUMP FOR TABLE: usuarios
# ------------------------------------------------------------

INSERT INTO
  `usuarios` (
    `Id`,
    `email`,
    `username`,
    `password`,
    `createdAt`,
    `updatedAt`,
    `nombre`,
    `apellido`,
    `telefono`,
    `direccion`,
    `resetPasswordToken`,
    `resetPasswordTokenExpiry`,
    `emailVerified`,
    `emailVerificationToken`,
    `role`
  )
VALUES
  (
    1,
    'isafact24@gmail.com',
    'Fran',
    '$2b$10$rPMZV9KmGlohDZxA6KQB9.4EF/vFHmBn0nCyw5.ndvf2XwvN3GHzm',
    '2024-06-12 05:08:20.955',
    '2024-06-12 05:08:34.767',
    'Fran',
    'A.C',
    '145236',
    'HEREDIA',
    NULL,
    NULL,
    1,
    NULL,
    'admin'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
