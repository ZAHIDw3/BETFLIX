-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: betflix
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cinta`
--

DROP TABLE IF EXISTS `cinta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cinta` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Sinopsis` varchar(255) NOT NULL,
  `Duracion` char(10) NOT NULL,
  `Anio` varchar(4) NOT NULL,
  `Elenco` varchar(255) NOT NULL,
  `Direccion` varchar(255) NOT NULL,
  `Guion` varchar(255) NOT NULL,
  `Clasificacion_edad` varchar(255) NOT NULL,
  `Generos` varchar(255) NOT NULL,
  `Idiomas` varchar(255) NOT NULL,
  `Idiomas_Subtitulos` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Subido` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinta`
--

LOCK TABLES `cinta` WRITE;
/*!40000 ALTER TABLE `cinta` DISABLE KEYS */;
INSERT INTO `cinta` VALUES (1,'Trol','¿Cómo detienes una amenaza que creias que solo existia en cuentos de hadas? ','1h 34min','2022','Ine Marie Wilmann, Kim Falck','Roar Uthaung','Roar Uthaung, Espen Uthung','TV-14','De Noruega, Acción','Español, Ingles','Español, Ingles','N','2022-12-13 18:35:17','2022-12-14 16:42:33'),(2,'Belle','En el mundo virtual de U, una famosa cantante y un uuario llamado el Dragón forman un vinculo y se embarcan en una aventura que empieza a afectar su mundo real.','2h 1min','2005','Kho Nakamura, Ryo Narita, Shota Sometani','Mamoru Hosoda','Nanoru Hosada','PG','De Japón, Música, Anime de drama','Jopones, Ingles, Español','Jopones, Ingles, Español','S','2022-12-13 22:26:19','2022-12-13 22:26:19');
/*!40000 ALTER TABLE `cinta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientela`
--

DROP TABLE IF EXISTS `clientela`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientela` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Correo` varchar(255) NOT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Telefono` varchar(10) DEFAULT NULL,
  `Forma_Pago` varchar(255) NOT NULL,
  `Plan` varchar(255) NOT NULL,
  `Fecha_Facturacion` date NOT NULL,
  `Plan_Activo` char(1) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientela`
--

LOCK TABLES `clientela` WRITE;
/*!40000 ALTER TABLE `clientela` DISABLE KEYS */;
INSERT INTO `clientela` VALUES (1,'zad@gmail.com','zad12345','2871326877','paypal','premium','2022-03-05','S','N','2022-12-11 05:31:15','2022-12-14 16:42:03'),(2,'sadasd','saddasda','asda','asda','asd','2020-03-05','S','S','2022-12-11 20:56:39','2022-12-13 05:47:00'),(3,'angel@gmail.com','$2a$10$6Pf.HCrsWjeJtISXMjwk9unrI2ff5PrhXr9HmDd.umft7s657dh.C','2871326877','Tarjeta','Premium','2022-06-02','S','S','2022-12-12 17:32:54','2022-12-12 17:32:54'),(4,'jose@gmail.com','$2a$10$Qe86T2USZ18n.ld5JbAh8.trlStBceGZVj8lomaGFZ4bOt0a1niky','2871326877','Tarjeta','Premium','2022-06-02','S','S','2022-12-12 17:34:00','2022-12-12 17:34:00'),(5,'zury@gmail.com','$2a$10$e5arsi.n965MeGP899f31.qytcoh4s0TRnFzJpKn7SXPGPhzIRc/y','2875973204','Tarjeta','Premium','2022-02-02','S','S','2022-12-13 04:27:40','2022-12-13 04:27:40'),(6,'toño@gmail.com','$2a$10$xNdwceNnytBnFRbNYSwPsOczduSOoeRO56TZmzpQ/YZcx9zOmvIRq','undefined','Paypal','Premium','2022-02-02','S','S','2022-12-13 05:22:07','2022-12-13 14:25:31');
/*!40000 ALTER TABLE `clientela` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coleccion`
--

DROP TABLE IF EXISTS `coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coleccion` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Sinopsis` varchar(255) NOT NULL,
  `Anio` varchar(4) NOT NULL,
  `Elenco` varchar(255) NOT NULL,
  `Creado` varchar(255) NOT NULL,
  `Clasificacion_edad` varchar(255) NOT NULL,
  `Generos` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Subido` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coleccion`
--

LOCK TABLES `coleccion` WRITE;
/*!40000 ALTER TABLE `coleccion` DISABLE KEYS */;
INSERT INTO `coleccion` VALUES (1,'Mañana','Una cara familiar aparece en el radar del equipo, pero su nivel de energia negativa fluctua de forma irregular','2022','Kim Hee-seon, Rowoonn, Lee Soo-hyuk','Kim Tae-youn','TV-MA','De Corea, Basados en wencómics, Fantasia, Dramas','N','2022-12-14 06:04:04','2022-12-14 15:39:30'),(2,'Belle','En el mundo virtual de U, una famosa cantante y un uuario llamado el Dragón forman un vinculo y se embarcan en una aventura que empieza a afectar su mundo real.','2005','Kho Nakamura, Ryo Narita, Shota Sometani','Mamoru Hosoda','PG','De Japón, Música, Anime de drama','S','2022-12-14 16:32:31','2022-12-14 16:32:31');
/*!40000 ALTER TABLE `coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temporada`
--

DROP TABLE IF EXISTS `temporada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temporada` (
  `ID_Temporada` int(11) NOT NULL AUTO_INCREMENT,
  `Temporada` char(4) NOT NULL,
  `Numero_Capitulos` varchar(255) NOT NULL,
  `Activo_Temporada` char(1) NOT NULL,
  `Subido_Temporada` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado_Temporada` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ID_coleccion` int(11) NOT NULL,
  PRIMARY KEY (`ID_Temporada`),
  KEY `ID_coleccion` (`ID_coleccion`),
  CONSTRAINT `temporada_ibfk_1` FOREIGN KEY (`ID_coleccion`) REFERENCES `coleccion` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temporada`
--

LOCK TABLES `temporada` WRITE;
/*!40000 ALTER TABLE `temporada` DISABLE KEYS */;
INSERT INTO `temporada` VALUES (1,'1','10','N','2022-12-14 06:05:26','2022-12-14 15:44:14',1),(2,'2','10','S','2022-12-14 14:37:08','2022-12-14 14:37:08',1);
/*!40000 ALTER TABLE `temporada` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 10:45:32
