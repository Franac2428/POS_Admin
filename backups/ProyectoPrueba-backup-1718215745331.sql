-- MySQL dump 10.13  Distrib 8.4.0, for Win64 (x86_64)
--
-- Host: ${process.env.NEXT_PUBLIC_API_URL}    Database: ProyectoPrueba
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auditorialogin`
--

DROP TABLE IF EXISTS `auditorialogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auditorialogin` (
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditorialogin`
--

LOCK TABLES `auditorialogin` WRITE;
/*!40000 ALTER TABLE `auditorialogin` DISABLE KEYS */;
INSERT INTO `auditorialogin` VALUES (5,'2024-06-12 02:54:25.925','josueuniv09@gmail.com','s',2,'2024-06-12 02:54:26.010','Clave Incorrecta'),(6,'2024-06-12 02:54:28.457','josueuniv09@gmail.com','',3,'2024-06-12 02:54:28.520','Ingreso satisfactorio'),(7,'2024-06-12 02:55:17.582','josueuniv09@gmail.com','',3,'2024-06-12 02:55:17.646','Ingreso satisfactorio'),(8,'2024-06-12 03:15:05.596','josueuniv09@gmail.com','s',2,'2024-06-12 03:15:05.664','Clave Incorrecta'),(9,'2024-06-12 03:32:36.058','josueuniv09@gmail.com','s',2,'2024-06-12 03:32:36.126','Clave Incorrecta'),(10,'2024-06-12 03:32:40.168','josueuniv09@gmail.com','',3,'2024-06-12 03:32:40.233','Ingreso satisfactorio'),(11,'2024-06-12 03:39:16.183','josueuniv09@gmail.com','',3,'2024-06-12 03:39:16.250','Ingreso satisfactorio'),(12,'2024-06-12 16:47:18.514','josueuniv09@gmail.com','',3,'2024-06-12 16:47:18.599','Ingreso satisfactorio'),(13,'2024-06-12 17:49:07.960','josueuniv09@gmail.com','',3,'2024-06-12 17:49:08.028','Ingreso satisfactorio');
/*!40000 ALTER TABLE `auditorialogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statusauditorialogin`
--

DROP TABLE IF EXISTS `statusauditorialogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statusauditorialogin` (
  `IdStatusAuditoriaLogin` int NOT NULL AUTO_INCREMENT,
  `Status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`IdStatusAuditoriaLogin`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statusauditorialogin`
--

LOCK TABLES `statusauditorialogin` WRITE;
/*!40000 ALTER TABLE `statusauditorialogin` DISABLE KEYS */;
INSERT INTO `statusauditorialogin` VALUES (1,'Pendiente'),(2,'Fallido'),(3,'Satisfactorio'),(4,'No Existe');
/*!40000 ALTER TABLE `statusauditorialogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (5,'josueuniv09@gmail.com','Josubs','$2b$10$.uRyeWxg83bxo6mhlnvN6.zAozIMcZiKBha59RlubIiXPbGB5kRZe','2024-06-11 19:00:00.754','2024-06-11 19:02:29.413','Josué','Bonilla Soto','72094668','Tres ríos',NULL,NULL,1,NULL,'admin');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-12 12:09:05
