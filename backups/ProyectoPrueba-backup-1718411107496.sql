-- MySQL dump 10.13  Distrib 8.4.0, for Win64 (x86_64)
--
-- Host: localhost    Database: ProyectoPrueba
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
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditorialogin`
--

LOCK TABLES `auditorialogin` WRITE;
/*!40000 ALTER TABLE `auditorialogin` DISABLE KEYS */;
INSERT INTO `auditorialogin` VALUES (5,'2024-06-12 02:54:25.925','josueuniv09@gmail.com','s',2,'2024-06-12 02:54:26.010','Clave Incorrecta'),(6,'2024-06-12 02:54:28.457','josueuniv09@gmail.com','',3,'2024-06-12 02:54:28.520','Ingreso satisfactorio'),(7,'2024-06-12 02:55:17.582','josueuniv09@gmail.com','',3,'2024-06-12 02:55:17.646','Ingreso satisfactorio'),(8,'2024-06-12 03:15:05.596','josueuniv09@gmail.com','s',2,'2024-06-12 03:15:05.664','Clave Incorrecta'),(9,'2024-06-12 03:32:36.058','josueuniv09@gmail.com','s',2,'2024-06-12 03:32:36.126','Clave Incorrecta'),(10,'2024-06-12 03:32:40.168','josueuniv09@gmail.com','',3,'2024-06-12 03:32:40.233','Ingreso satisfactorio'),(11,'2024-06-12 03:39:16.183','josueuniv09@gmail.com','',3,'2024-06-12 03:39:16.250','Ingreso satisfactorio'),(12,'2024-06-12 16:47:18.514','josueuniv09@gmail.com','',3,'2024-06-12 16:47:18.599','Ingreso satisfactorio'),(13,'2024-06-12 17:49:07.960','josueuniv09@gmail.com','',3,'2024-06-12 17:49:08.028','Ingreso satisfactorio'),(14,'2024-06-12 18:22:49.549','josueuniv09@gmail.com','',3,'2024-06-12 18:22:49.616','Ingreso satisfactorio'),(15,'2024-06-12 18:24:56.986','josueuniv09@gmail.com','',3,'2024-06-12 18:24:57.055','Ingreso satisfactorio'),(16,'2024-06-12 18:25:06.161','josueuniv09@gmail.com','',3,'2024-06-12 18:25:06.228','Ingreso satisfactorio'),(17,'2024-06-12 18:25:33.668','josueuniv09@gmail.com','',3,'2024-06-12 18:25:33.735','Ingreso satisfactorio'),(18,'2024-06-12 18:25:59.565','josueuniv09@gmail.com','',3,'2024-06-12 18:25:59.630','Ingreso satisfactorio'),(19,'2024-06-12 18:28:46.123','josueuniv09@gmail.com','',3,'2024-06-12 18:28:46.200','Ingreso satisfactorio'),(20,'2024-06-12 18:54:38.658','josueuniv09@gmail.com','',3,'2024-06-12 18:54:38.727','Ingreso satisfactorio'),(21,'2024-06-12 18:56:14.747','josueuniv09@gmail.com','',3,'2024-06-12 18:56:14.812','Ingreso satisfactorio'),(22,'2024-06-12 18:57:08.778','josueuniv09@gmail.com','',3,'2024-06-12 18:57:08.845','Ingreso satisfactorio'),(23,'2024-06-12 18:58:09.674','josueuniv09@gmail.com','',3,'2024-06-12 18:58:09.745','Ingreso satisfactorio'),(24,'2024-06-12 18:58:20.076','josueuniv09@gmail.com','',3,'2024-06-12 18:58:20.142','Ingreso satisfactorio'),(25,'2024-06-12 19:20:16.022','josueuniv09@gmail.com','',3,'2024-06-12 19:20:16.090','Ingreso satisfactorio'),(26,'2024-06-12 19:50:03.271','josueuniv09@gmail.com','',3,'2024-06-12 19:50:03.341','Ingreso satisfactorio'),(27,'2024-06-12 19:55:16.012','josueuniv09@gmail.com','',3,'2024-06-12 19:55:16.084','Ingreso satisfactorio'),(28,'2024-06-12 19:55:29.329','josueuniv09@gmail.com','',3,'2024-06-12 19:55:29.395','Ingreso satisfactorio'),(29,'2024-06-12 19:59:43.171','josueuniv09@gmail.com','',3,'2024-06-12 19:59:43.238','Ingreso satisfactorio'),(30,'2024-06-12 19:59:58.193','josueuniv09@gmail.com','',3,'2024-06-12 19:59:58.260','Ingreso satisfactorio'),(31,'2024-06-12 20:28:48.464','josueuniv09@gmail.com','',3,'2024-06-12 20:28:48.530','Ingreso satisfactorio'),(32,'2024-06-12 20:29:45.196','josueuniv09@gmail.com','',3,'2024-06-12 20:29:45.317','Ingreso satisfactorio'),(33,'2024-06-12 20:29:47.527','josueuniv09@gmail.com','',3,'2024-06-12 20:29:47.857','Ingreso satisfactorio'),(34,'2024-06-12 20:29:57.907','josueuniv09@gmail.com','',3,'2024-06-12 20:29:57.971','Ingreso satisfactorio'),(35,'2024-06-12 20:39:29.950','josueuniv09@gmail.com','',3,'2024-06-12 20:39:30.018','Ingreso satisfactorio'),(36,'2024-06-13 00:18:33.171','josueuniv09@gmail.com','',3,'2024-06-13 00:18:33.259','Ingreso satisfactorio'),(37,'2024-06-13 00:19:07.371','josueuniv09@gmail.com','',3,'2024-06-13 00:19:07.437','Ingreso satisfactorio'),(38,'2024-06-13 00:20:49.792','josueuniv09@gmail.com','',3,'2024-06-13 00:20:49.857','Ingreso satisfactorio'),(39,'2024-06-13 00:21:19.504','josueuniv09@gmail.com','',3,'2024-06-13 00:21:19.570','Ingreso satisfactorio'),(40,'2024-06-13 00:21:29.689','josueuniv09@gmail.com','',3,'2024-06-13 00:21:29.754','Ingreso satisfactorio'),(41,'2024-06-13 00:22:05.650','josue@email.com','s',4,'2024-06-13 00:22:05.653','Usuario no existe'),(42,'2024-06-13 00:22:08.378','josue@email.com','ss',4,'2024-06-13 00:22:08.384','Usuario no existe'),(43,'2024-06-13 00:23:06.500','josueuniv09@gmail.com','',3,'2024-06-13 00:23:06.564','Ingreso satisfactorio'),(44,'2024-06-13 00:24:21.572','josue@email.com','',3,'2024-06-13 00:24:21.637','Ingreso satisfactorio'),(45,'2024-06-13 00:24:28.126','josueuniv09@gmail.com','s',4,'2024-06-13 00:24:28.130','Usuario no existe'),(46,'2024-06-13 00:34:25.857','josue@email.com','',3,'2024-06-13 00:34:25.932','Ingreso satisfactorio'),(47,'2024-06-13 00:36:07.433','josueuniv09@gmail.com','',3,'2024-06-13 00:36:07.497','Ingreso satisfactorio'),(48,'2024-06-13 00:36:12.549','josueuniv09@gmail.com','s',2,'2024-06-13 00:36:12.613','Clave Incorrecta'),(49,'2024-06-13 00:36:15.549','josueuniv09@gmail.com','',3,'2024-06-13 00:36:15.613','Ingreso satisfactorio'),(50,'2024-06-13 00:44:31.810','josueuniv09@gmail.com','',3,'2024-06-13 00:44:31.876','Ingreso satisfactorio'),(51,'2024-06-13 00:50:55.534','josue@email.com','',3,'2024-06-13 00:50:55.599','Ingreso satisfactorio'),(52,'2024-06-13 01:02:56.657','josue@email.com','',3,'2024-06-13 01:02:56.723','Ingreso satisfactorio'),(53,'2024-06-13 01:04:25.074','josueuniv09@gmail.com','12345',2,'2024-06-13 01:04:25.139','Clave Incorrecta'),(54,'2024-06-13 01:04:29.019','josueunive09@gmail.com','12345',4,'2024-06-13 01:04:29.024','Usuario no existe'),(55,'2024-06-13 01:04:35.936','josueuniv09@gmail.com','',3,'2024-06-13 01:04:36.002','Ingreso satisfactorio'),(56,'2024-06-13 01:05:18.673','josueuniv09@gmail.com','',3,'2024-06-13 01:05:18.737','Ingreso satisfactorio'),(57,'2024-06-13 01:06:35.275','josueuniv09@gmail.com','',3,'2024-06-13 01:06:35.341','Ingreso satisfactorio'),(58,'2024-06-15 00:22:29.143','josueuniv09@gmail.com','ss',2,'2024-06-15 00:22:29.283','Clave Incorrecta'),(59,'2024-06-15 00:22:33.507','josueuniv09@gmail.com','s',2,'2024-06-15 00:22:33.574','Clave Incorrecta'),(60,'2024-06-15 00:22:38.750','josueuniv09@gmail.com','1234',2,'2024-06-15 00:22:38.813','Clave Incorrecta'),(61,'2024-06-15 00:22:44.455','josueuniv09@gmail.com','4444',2,'2024-06-15 00:22:44.522','Clave Incorrecta'),(62,'2024-06-15 00:23:22.773','josueuniv09@gmail.com','444456',2,'2024-06-15 00:23:22.838','Clave Incorrecta'),(63,'2024-06-15 00:23:41.166','joboso_2003@hotmail.com','ss',2,'2024-06-15 00:23:41.233','Clave Incorrecta'),(64,'2024-06-15 00:23:46.457','joboso_2003@hotmail.com','',3,'2024-06-15 00:23:46.520','Ingreso satisfactorio'),(65,'2024-06-15 00:24:20.697','joboso_2003@hotmail.com','',3,'2024-06-15 00:24:20.767','Ingreso satisfactorio');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (7,'joboso_2003@hotmail.com','angelboy258','$2b$10$JqdSwQFvaf2Lx3qTUJ5A2uNsCPHbCSdvkkrJf.suTxPrt4.VIFLKG','2024-06-13 00:24:03.050','2024-06-13 00:24:03.055','Josue','Bonilla Soto','72094668','Tres Ríos',NULL,NULL,0,'rdgdh-taz45W66BMtWEBTvp3HJQbmre1H7-2QP6SfJo','admin'),(12,'josueuniv09@gmail.com','Josubs','$2b$10$lKGeRr7M4T.UYz06CmnXrOOe6F6O2sslpNXhp1wuMdr/jau4DoAai','2024-06-13 01:03:37.832','2024-06-13 01:05:04.440','Josue','Bonilla Soto','72094668','Tres Ríos',NULL,NULL,1,NULL,'admin');
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

-- Dump completed on 2024-06-14 18:25:07
