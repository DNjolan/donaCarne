CREATE DATABASE  IF NOT EXISTS `dona_carne_dos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dona_carne_dos`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: dona_carne_dos
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acompañante`
--

DROP TABLE IF EXISTS `acompañante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acompañante` (
  `id_acompañante` int NOT NULL AUTO_INCREMENT,
  `Nombre_acompañante` varchar(33) NOT NULL,
  `Apellido_paterno_aco` varchar(33) NOT NULL,
  `apellido_materno_aco` varchar(33) NOT NULL,
  `Rut_aco` varchar(33) NOT NULL,
  `Nacionalidad_aco` varchar(22) NOT NULL,
  `Telefono_aco` int NOT NULL,
  `Correo_aco` varchar(50) NOT NULL,
  `Sexo` char(1) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Huesped_id_huesped` int NOT NULL,
  PRIMARY KEY (`id_acompañante`),
  KEY `Acompañante_Huesped_FK` (`Huesped_id_huesped`),
  CONSTRAINT `Acompañante_Huesped_FK` FOREIGN KEY (`Huesped_id_huesped`) REFERENCES `huesped` (`id_huesped`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acompañante`
--

LOCK TABLES `acompañante` WRITE;
/*!40000 ALTER TABLE `acompañante` DISABLE KEYS */;
/*!40000 ALTER TABLE `acompañante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boleta`
--

DROP TABLE IF EXISTS `boleta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boleta` (
  `id_boleta` int NOT NULL AUTO_INCREMENT,
  `Nombre_hostal` varchar(66) NOT NULL,
  `Rut_empresa` varchar(15) NOT NULL,
  `Codigo_bol` int NOT NULL,
  `Hora_bol` date NOT NULL,
  `Fecha_bol` date NOT NULL,
  `Tarj_debito_id_tarj_debito` int DEFAULT NULL,
  `Tarj_credito_id_tarj_credito` int DEFAULT NULL,
  `Metodo_pago_id_metodo_pago` int NOT NULL,
  `Hostal_id_hostal` int NOT NULL,
  PRIMARY KEY (`id_boleta`),
  UNIQUE KEY `Boleta__IDXv2` (`Metodo_pago_id_metodo_pago`),
  UNIQUE KEY `Boleta__IDX` (`Tarj_debito_id_tarj_debito`),
  UNIQUE KEY `Boleta__IDXv1` (`Tarj_credito_id_tarj_credito`),
  KEY `Boleta_Hostal_FK` (`Hostal_id_hostal`),
  CONSTRAINT `Boleta_Hostal_FK` FOREIGN KEY (`Hostal_id_hostal`) REFERENCES `hostal` (`id_hostal`),
  CONSTRAINT `Boleta_Metodo_pago_FK` FOREIGN KEY (`Metodo_pago_id_metodo_pago`) REFERENCES `metodo_pago` (`id_metodo_pago`),
  CONSTRAINT `Boleta_Tarj_credito_FK` FOREIGN KEY (`Tarj_credito_id_tarj_credito`) REFERENCES `tarj_credito` (`id_tarj_credito`),
  CONSTRAINT `Boleta_Tarj_debito_FK` FOREIGN KEY (`Tarj_debito_id_tarj_debito`) REFERENCES `tarj_debito` (`id_tarj_debito`),
  CONSTRAINT `FKArc_11` CHECK ((((`Tarj_debito_id_tarj_debito` is not null) and (`Tarj_credito_id_tarj_credito` is null)) or ((`Tarj_credito_id_tarj_credito` is not null) and (`Tarj_debito_id_tarj_debito` is null))))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boleta`
--

LOCK TABLES `boleta` WRITE;
/*!40000 ALTER TABLE `boleta` DISABLE KEYS */;
/*!40000 ALTER TABLE `boleta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cate_producto`
--

DROP TABLE IF EXISTS `cate_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cate_producto` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `Categoria` varchar(35) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cate_producto`
--

LOCK TABLES `cate_producto` WRITE;
/*!40000 ALTER TABLE `cate_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `cate_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudad`
--

DROP TABLE IF EXISTS `ciudad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudad` (
  `id_ciudad` int NOT NULL AUTO_INCREMENT,
  `Ciudad` varchar(20) NOT NULL,
  PRIMARY KEY (`id_ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudad`
--

LOCK TABLES `ciudad` WRITE;
/*!40000 ALTER TABLE `ciudad` DISABLE KEYS */;
INSERT INTO `ciudad` VALUES (1,'Santiago');
/*!40000 ALTER TABLE `ciudad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comuna`
--

DROP TABLE IF EXISTS `comuna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comuna` (
  `id_comuna` int NOT NULL AUTO_INCREMENT,
  `comuna` varchar(17) NOT NULL,
  `ciudad_id_ciudad` int NOT NULL,
  PRIMARY KEY (`id_comuna`),
  KEY `comuna_id_comuna_idx` (`ciudad_id_ciudad`),
  CONSTRAINT `comuna_id_comuna` FOREIGN KEY (`ciudad_id_ciudad`) REFERENCES `ciudad` (`id_ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comuna`
--

LOCK TABLES `comuna` WRITE;
/*!40000 ALTER TABLE `comuna` DISABLE KEYS */;
INSERT INTO `comuna` VALUES (1,'Providencia',1);
/*!40000 ALTER TABLE `comuna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `id_direccion` int NOT NULL AUTO_INCREMENT,
  `Direccion` varchar(50) NOT NULL,
  `Comuna_id_comuna` int NOT NULL,
  `Numero_direccion` int NOT NULL,
  PRIMARY KEY (`id_direccion`),
  KEY `Direccion_Comuna_FK` (`Comuna_id_comuna`),
  CONSTRAINT `Direccion_Comuna_FK` FOREIGN KEY (`Comuna_id_comuna`) REFERENCES `comuna` (`id_comuna`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
INSERT INTO `direccion` VALUES (1,'Bilbao',1,1492);
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleado`
--

DROP TABLE IF EXISTS `empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleado` (
  `id_emplado` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(31) NOT NULL,
  `Apellido_Paterno` varchar(33) NOT NULL,
  `Apellido_Materno` varchar(33) NOT NULL,
  `Numero_telefono` int NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Sexo` char(1) NOT NULL,
  `Direccion_id_direccion` int NOT NULL,
  `Rol_id_rol` int NOT NULL,
  PRIMARY KEY (`id_emplado`),
  UNIQUE KEY `Correo_UNIQUE` (`Correo`),
  KEY `Empleado_Direccion_FK` (`Direccion_id_direccion`),
  KEY `Empleado_Rol_FK` (`Rol_id_rol`),
  CONSTRAINT `Empleado_Direccion_FK` FOREIGN KEY (`Direccion_id_direccion`) REFERENCES `direccion` (`id_direccion`),
  CONSTRAINT `Empleado_Rol_FK` FOREIGN KEY (`Rol_id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleado`
--

LOCK TABLES `empleado` WRITE;
/*!40000 ALTER TABLE `empleado` DISABLE KEYS */;
INSERT INTO `empleado` VALUES (1,'Daniel','Nieto','Cifuentes',930328562,'da.nieto@duocuc.cl','1234','2001-06-15','M',1,1),(3,'pepito','ola','dos',930328562,'da.nietodos@duocuc.cl','12345','2021-12-02','M',1,2),(5,'pepito','ola','dos',930328562,'da.nietodoss@duocuc.cl','12345','2021-12-02','M',1,2),(6,'pepito','ola','dos',930328562,'da.nietoadoss@duocuc.cl','12345','2021-12-02','M',1,2),(7,'pepito','ola','dos',930328562,'da.nietaoadoss@duocuc.cl','12345','2021-12-02','M',1,2),(8,'pepito','ola','dos',930328562,'da.niaetaoadoss@duocuc.cl','12345','2021-12-02','M',1,2),(9,'pepito','ola','dos',930328562,'da.niaaetaoadoss@duocuc.cl','12345','2021-12-02','M',1,2),(10,'pepito','ola','dos',930328562,'da.niaaaetaoadoss@duocuc.cl','12345','2021-12-02','M',1,2),(11,'pepito','ola','dos',930328562,'da.niaasdoadoss@duocuc.cl','12345','2021-12-02','M',1,2),(12,'pepito','ola','dos',930328562,'da.nia23doadoss@duocuc.cl','12345','2021-12-02','M',1,2),(13,'pepito','ola','dos',930328562,'da.nia23d2oadoss@duocuc.cl','12345','2021-12-02','M',1,2),(14,'pepito','ola','dos',930328562,'','12345','2021-12-02','M',1,2),(16,'pepito','ola','dos',930328562,'asdasd@duocuc.cl','12345','2021-12-02','M',1,2),(18,'pepito','ola','dos',930328562,'asdasdasd@duocuc.cl','12345','2021-12-02','M',1,2),(19,'pepito','ola','dos',930328562,'asd2asdasd@duocuc.cl','12345','2021-12-02','M',1,2);
/*!40000 ALTER TABLE `empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado_habi`
--

DROP TABLE IF EXISTS `estado_habi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado_habi` (
  `id_estado_habi` int NOT NULL AUTO_INCREMENT,
  `Estado_habitacion` varchar(55) NOT NULL,
  PRIMARY KEY (`id_estado_habi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado_habi`
--

LOCK TABLES `estado_habi` WRITE;
/*!40000 ALTER TABLE `estado_habi` DISABLE KEYS */;
/*!40000 ALTER TABLE `estado_habi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `id_factura` int NOT NULL AUTO_INCREMENT,
  `Numero_factura` int NOT NULL,
  `Fecha_emision_fac` date NOT NULL,
  `IVA_fac` int NOT NULL,
  `Total_fac` int NOT NULL,
  `Metodo_pago_id_metodo_pago` int NOT NULL,
  `Hostal_id_hostal` int NOT NULL,
  PRIMARY KEY (`id_factura`),
  UNIQUE KEY `Factura__IDX` (`Metodo_pago_id_metodo_pago`),
  KEY `Factura_Hostal_FK` (`Hostal_id_hostal`),
  CONSTRAINT `Factura_Hostal_FK` FOREIGN KEY (`Hostal_id_hostal`) REFERENCES `hostal` (`id_hostal`),
  CONSTRAINT `Factura_Metodo_pago_FK` FOREIGN KEY (`Metodo_pago_id_metodo_pago`) REFERENCES `metodo_pago` (`id_metodo_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hostal`
--

DROP TABLE IF EXISTS `hostal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hostal` (
  `id_hostal` int NOT NULL AUTO_INCREMENT,
  `Nombre_hostal` varchar(22) NOT NULL,
  `Rut_empresa_hos` varchar(22) NOT NULL,
  `Giro` varchar(50) NOT NULL,
  `Nombre_Dueño` varchar(60) NOT NULL,
  `Direccion_id_direccion` int NOT NULL,
  PRIMARY KEY (`id_hostal`),
  UNIQUE KEY `Hostal__IDX` (`Direccion_id_direccion`),
  CONSTRAINT `Hostal_Direccion_FK` FOREIGN KEY (`Direccion_id_direccion`) REFERENCES `direccion` (`id_direccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hostal`
--

LOCK TABLES `hostal` WRITE;
/*!40000 ALTER TABLE `hostal` DISABLE KEYS */;
/*!40000 ALTER TABLE `hostal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `huesped`
--

DROP TABLE IF EXISTS `huesped`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `huesped` (
  `id_huesped` int NOT NULL AUTO_INCREMENT,
  `Nombre_huesped` varchar(33) NOT NULL,
  `Apellido_paterno_hues` varchar(33) NOT NULL,
  `Apellido_materno_hues` varchar(33) NOT NULL,
  `Rut_hues` varchar(22) NOT NULL,
  `Nacionalidad_hues` varchar(22) NOT NULL,
  `Telefono_hues` int NOT NULL,
  `Correo_hues` varchar(55) NOT NULL,
  `Sexo_hues` char(1) NOT NULL,
  `Fecha_nacimiento_hues` date NOT NULL,
  `Rol_id_rol` int NOT NULL,
  PRIMARY KEY (`id_huesped`),
  KEY `Huesped_Rol_FK` (`Rol_id_rol`),
  CONSTRAINT `Huesped_Rol_FK` FOREIGN KEY (`Rol_id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `huesped`
--

LOCK TABLES `huesped` WRITE;
/*!40000 ALTER TABLE `huesped` DISABLE KEYS */;
/*!40000 ALTER TABLE `huesped` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metodo_pago`
--

DROP TABLE IF EXISTS `metodo_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metodo_pago` (
  `id_metodo_pago` int NOT NULL AUTO_INCREMENT,
  `Boleta_id_boleta` int DEFAULT NULL,
  `Factura_id_factura` int DEFAULT NULL,
  PRIMARY KEY (`id_metodo_pago`),
  UNIQUE KEY `Metodo_pago__IDX` (`Boleta_id_boleta`),
  UNIQUE KEY `Metodo_pago__IDXv1` (`Factura_id_factura`),
  CONSTRAINT `Metodo_pago_Boleta_FK` FOREIGN KEY (`Boleta_id_boleta`) REFERENCES `boleta` (`id_boleta`),
  CONSTRAINT `Metodo_pago_Factura_FK` FOREIGN KEY (`Factura_id_factura`) REFERENCES `factura` (`id_factura`),
  CONSTRAINT `FKArc_12` CHECK ((((`Factura_id_factura` is not null) and (`Boleta_id_boleta` is null)) or ((`Boleta_id_boleta` is not null) and (`Factura_id_factura` is null))))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodo_pago`
--

LOCK TABLES `metodo_pago` WRITE;
/*!40000 ALTER TABLE `metodo_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `metodo_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden_ped_prod`
--

DROP TABLE IF EXISTS `orden_ped_prod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden_ped_prod` (
  `id_orden_producto` int NOT NULL AUTO_INCREMENT,
  `Cantidad` int NOT NULL,
  `Valor_total` int NOT NULL,
  `Orden_pedido_id_pedido` int NOT NULL,
  `Producto_id_producto` int NOT NULL,
  PRIMARY KEY (`id_orden_producto`),
  KEY `Orden_ped_prod_Orden_pedido_FK` (`Orden_pedido_id_pedido`),
  KEY `Orden_ped_prod_Producto_FK` (`Producto_id_producto`),
  CONSTRAINT `Orden_ped_prod_Orden_pedido_FK` FOREIGN KEY (`Orden_pedido_id_pedido`) REFERENCES `orden_pedido` (`id_pedido`),
  CONSTRAINT `Orden_ped_prod_Producto_FK` FOREIGN KEY (`Producto_id_producto`) REFERENCES `producto` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden_ped_prod`
--

LOCK TABLES `orden_ped_prod` WRITE;
/*!40000 ALTER TABLE `orden_ped_prod` DISABLE KEYS */;
/*!40000 ALTER TABLE `orden_ped_prod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden_pedido`
--

DROP TABLE IF EXISTS `orden_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden_pedido` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `Fecha` date NOT NULL,
  `Hora` int NOT NULL,
  `minuto` int NOT NULL,
  `Codigo_pedido` int NOT NULL,
  `Descripcion` varchar(100) NOT NULL,
  `Proveedor_id_proveedor` int NOT NULL,
  `Empleado_id_emplado` int NOT NULL,
  `Metodo_pago_id_metodo_pago` int NOT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `Orden_pedido_Empleado_FK` (`Empleado_id_emplado`),
  KEY `Orden_pedido_Metodo_pago_FK` (`Metodo_pago_id_metodo_pago`),
  KEY `Orden_pedido_Proveedor_FK` (`Proveedor_id_proveedor`),
  CONSTRAINT `Orden_pedido_Empleado_FK` FOREIGN KEY (`Empleado_id_emplado`) REFERENCES `empleado` (`id_emplado`),
  CONSTRAINT `Orden_pedido_Metodo_pago_FK` FOREIGN KEY (`Metodo_pago_id_metodo_pago`) REFERENCES `metodo_pago` (`id_metodo_pago`),
  CONSTRAINT `Orden_pedido_Proveedor_FK` FOREIGN KEY (`Proveedor_id_proveedor`) REFERENCES `proveedor` (`id_proveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden_pedido`
--

LOCK TABLES `orden_pedido` WRITE;
/*!40000 ALTER TABLE `orden_pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `orden_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plato`
--

DROP TABLE IF EXISTS `plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plato` (
  `id_plato` int NOT NULL AUTO_INCREMENT,
  `Nombre_Plato` varchar(23) NOT NULL,
  `Valor` int NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Empleado_id_emplado` int NOT NULL,
  `plato_orien_id_plato_orien` int NOT NULL,
  `Tipo_plato_id_tipo_plato` int NOT NULL,
  PRIMARY KEY (`id_plato`),
  KEY `plato_Empleado_FK` (`Empleado_id_emplado`),
  KEY `plato_Tipo_plato_FK` (`Tipo_plato_id_tipo_plato`),
  KEY `plato_plato_orientado_FK` (`plato_orien_id_plato_orien`),
  CONSTRAINT `plato_Empleado_FK` FOREIGN KEY (`Empleado_id_emplado`) REFERENCES `empleado` (`id_emplado`),
  CONSTRAINT `plato_plato_orientado_FK` FOREIGN KEY (`plato_orien_id_plato_orien`) REFERENCES `plato_orien` (`id_plato_orien`),
  CONSTRAINT `plato_Tipo_plato_FK` FOREIGN KEY (`Tipo_plato_id_tipo_plato`) REFERENCES `tipo_plato` (`id_tipo_plato`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plato`
--

LOCK TABLES `plato` WRITE;
/*!40000 ALTER TABLE `plato` DISABLE KEYS */;
/*!40000 ALTER TABLE `plato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plato_orien`
--

DROP TABLE IF EXISTS `plato_orien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plato_orien` (
  `id_plato_orien` int NOT NULL AUTO_INCREMENT,
  `plato_orientado` varchar(30) NOT NULL,
  PRIMARY KEY (`id_plato_orien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plato_orien`
--

LOCK TABLES `plato_orien` WRITE;
/*!40000 ALTER TABLE `plato_orien` DISABLE KEYS */;
/*!40000 ALTER TABLE `plato_orien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `Nombre_pro` varchar(80) NOT NULL,
  `Valor_pro` int NOT NULL,
  `Imagen_pro` blob NOT NULL,
  `Descripcion_pro` varchar(100) NOT NULL,
  `Cate_producto_id_categoria` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `Producto_Categoria_producto_FK` (`Cate_producto_id_categoria`),
  CONSTRAINT `Producto_Categoria_producto_FK` FOREIGN KEY (`Cate_producto_id_categoria`) REFERENCES `cate_producto` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provedor_producto`
--

DROP TABLE IF EXISTS `provedor_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provedor_producto` (
  `id_provedoor_pro` int NOT NULL AUTO_INCREMENT,
  `Proveedor_id_proveedor` int NOT NULL,
  `Producto_id_producto` int NOT NULL,
  PRIMARY KEY (`id_provedoor_pro`),
  KEY `Provedor_Producto_Producto_FK` (`Producto_id_producto`),
  KEY `Provedor_Producto_Proveedor_FK` (`Proveedor_id_proveedor`),
  CONSTRAINT `Provedor_Producto_Producto_FK` FOREIGN KEY (`Producto_id_producto`) REFERENCES `producto` (`id_producto`),
  CONSTRAINT `Provedor_Producto_Proveedor_FK` FOREIGN KEY (`Proveedor_id_proveedor`) REFERENCES `proveedor` (`id_proveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provedor_producto`
--

LOCK TABLES `provedor_producto` WRITE;
/*!40000 ALTER TABLE `provedor_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `provedor_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `id_proveedor` int NOT NULL AUTO_INCREMENT,
  `Numero_telefono` int NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `Nombre_empresa` varchar(50) NOT NULL,
  `Rubro` varchar(40) NOT NULL,
  `Logo` blob NOT NULL,
  `Rut_proveedor` varchar(20) NOT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_factura`
--

DROP TABLE IF EXISTS `reg_factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_factura` (
  `id_reg_factura` int NOT NULL AUTO_INCREMENT,
  `habitacion_demandada` int NOT NULL,
  `plato_mas_demandado` int NOT NULL,
  `Reg_huesped_id_reg_huesped` int NOT NULL,
  PRIMARY KEY (`id_reg_factura`),
  UNIQUE KEY `Registro_Factura__IDX` (`Reg_huesped_id_reg_huesped`),
  CONSTRAINT `Reg_factura_Reg_huesped_FK` FOREIGN KEY (`Reg_huesped_id_reg_huesped`) REFERENCES `reg_huesped` (`id_reg_huesped`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_factura`
--

LOCK TABLES `reg_factura` WRITE;
/*!40000 ALTER TABLE `reg_factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `reg_factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_habitacion`
--

DROP TABLE IF EXISTS `reg_habitacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_habitacion` (
  `id_reg_habi` int NOT NULL AUTO_INCREMENT,
  `Dormitorios` int NOT NULL,
  `Baños` int NOT NULL,
  `Cama_matrimonial` int NOT NULL,
  `Cama_individual` int NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `Precio` int NOT NULL,
  `Estado_habi_id_estado_habi` int NOT NULL,
  `Empleado_id_emplado` int NOT NULL,
  PRIMARY KEY (`id_reg_habi`),
  KEY `Reg_Habitacion_Empleado_FK` (`Empleado_id_emplado`),
  KEY `Reg_Habitacion_Estado_habi_FK` (`Estado_habi_id_estado_habi`),
  CONSTRAINT `Reg_Habitacion_Empleado_FK` FOREIGN KEY (`Empleado_id_emplado`) REFERENCES `empleado` (`id_emplado`),
  CONSTRAINT `Reg_Habitacion_Estado_habi_FK` FOREIGN KEY (`Estado_habi_id_estado_habi`) REFERENCES `estado_habi` (`id_estado_habi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_habitacion`
--

LOCK TABLES `reg_habitacion` WRITE;
/*!40000 ALTER TABLE `reg_habitacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `reg_habitacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_hues_reg_habi`
--

DROP TABLE IF EXISTS `reg_hues_reg_habi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_hues_reg_habi` (
  `id_reg_huesped_reg_habitacion` int NOT NULL AUTO_INCREMENT,
  `Reg_Habitacion_id_reg_habi` int NOT NULL,
  `Reg_huesped_id_reg_huesped` int NOT NULL,
  PRIMARY KEY (`id_reg_huesped_reg_habitacion`),
  KEY `reg_hues_reg_habi_Reg_habi_FK` (`Reg_Habitacion_id_reg_habi`),
  KEY `reg_hues_reg_habi_Reg_hues_FK` (`Reg_huesped_id_reg_huesped`),
  CONSTRAINT `reg_hues_reg_habi_Reg_habi_FK` FOREIGN KEY (`Reg_Habitacion_id_reg_habi`) REFERENCES `reg_habitacion` (`id_reg_habi`),
  CONSTRAINT `reg_hues_reg_habi_Reg_hues_FK` FOREIGN KEY (`Reg_huesped_id_reg_huesped`) REFERENCES `reg_huesped` (`id_reg_huesped`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_hues_reg_habi`
--

LOCK TABLES `reg_hues_reg_habi` WRITE;
/*!40000 ALTER TABLE `reg_hues_reg_habi` DISABLE KEYS */;
/*!40000 ALTER TABLE `reg_hues_reg_habi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_huesped`
--

DROP TABLE IF EXISTS `reg_huesped`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_huesped` (
  `id_reg_huesped` int NOT NULL AUTO_INCREMENT,
  `Numero_orden_huesped` int NOT NULL,
  `Fecha_emision_reg_hues` date NOT NULL,
  `Hora` date NOT NULL,
  `Huesped_id_huesped` int NOT NULL,
  `Reg_factura_id_reg_factura` int NOT NULL,
  PRIMARY KEY (`id_reg_huesped`),
  UNIQUE KEY `Registro_huesped__IDX` (`Reg_factura_id_reg_factura`),
  KEY `Reg_huesped_Huesped_FK` (`Huesped_id_huesped`),
  CONSTRAINT `Reg_huesped_Huesped_FK` FOREIGN KEY (`Huesped_id_huesped`) REFERENCES `huesped` (`id_huesped`),
  CONSTRAINT `Reg_huesped_Reg_Factura_FK` FOREIGN KEY (`Reg_factura_id_reg_factura`) REFERENCES `reg_factura` (`id_reg_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_huesped`
--

LOCK TABLES `reg_huesped` WRITE;
/*!40000 ALTER TABLE `reg_huesped` DISABLE KEYS */;
/*!40000 ALTER TABLE `reg_huesped` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reg_plato_plato`
--

DROP TABLE IF EXISTS `reg_plato_plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reg_plato_plato` (
  `id_reg_plato_plato` int NOT NULL AUTO_INCREMENT,
  `plato_id_plato` int NOT NULL,
  `Reg_huesped_id_reg_huesped` int NOT NULL,
  PRIMARY KEY (`id_reg_plato_plato`),
  KEY `reg_plato_plato_Reg_huesped_FK` (`Reg_huesped_id_reg_huesped`),
  KEY `reg_plato_plato_plato_FK` (`plato_id_plato`),
  CONSTRAINT `reg_plato_plato_plato_FK` FOREIGN KEY (`plato_id_plato`) REFERENCES `plato` (`id_plato`),
  CONSTRAINT `reg_plato_plato_Reg_huesped_FK` FOREIGN KEY (`Reg_huesped_id_reg_huesped`) REFERENCES `reg_huesped` (`id_reg_huesped`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reg_plato_plato`
--

LOCK TABLES `reg_plato_plato` WRITE;
/*!40000 ALTER TABLE `reg_plato_plato` DISABLE KEYS */;
/*!40000 ALTER TABLE `reg_plato_plato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `Rol` varchar(33) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'ADMIN'),(2,'EMPLEADO'),(3,'HUESPED');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarj_credito`
--

DROP TABLE IF EXISTS `tarj_credito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarj_credito` (
  `id_tarj_credito` int NOT NULL AUTO_INCREMENT,
  `Numero_tarjeta_cred` int NOT NULL,
  `Nombre_titular_cred` varchar(100) NOT NULL,
  `Nombre_banco_emisor_cred` varchar(33) NOT NULL,
  `Logo_banco_emisor_cred` blob NOT NULL,
  `Nombre_marca_tarjeta_cred` varchar(20) NOT NULL,
  `Logo_marca_tarjeta_cred` blob NOT NULL,
  `Codigo_CVV_cred` varchar(10) NOT NULL,
  `Fecha_caducidad_cred` date NOT NULL,
  `Boleta_id_boleta` int NOT NULL,
  PRIMARY KEY (`id_tarj_credito`),
  UNIQUE KEY `Tarj_credito__IDX` (`Boleta_id_boleta`),
  CONSTRAINT `Tarj_credito_Boleta_FK` FOREIGN KEY (`Boleta_id_boleta`) REFERENCES `boleta` (`id_boleta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarj_credito`
--

LOCK TABLES `tarj_credito` WRITE;
/*!40000 ALTER TABLE `tarj_credito` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarj_credito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarj_debito`
--

DROP TABLE IF EXISTS `tarj_debito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarj_debito` (
  `id_tarj_debito` int NOT NULL AUTO_INCREMENT,
  `Numero_tarjeta_deb` int NOT NULL,
  `Numero_cuenta_deb` int NOT NULL,
  `Nombre_titular_deb` varchar(100) NOT NULL,
  `Nombre_marca_tarjeta_deb` varchar(12) NOT NULL,
  `Nombre_banco_emisor_deb` varchar(22) NOT NULL,
  `Fecha_caducidad_deb` date NOT NULL,
  `Codigo_CVV_deb` varchar(12) NOT NULL,
  `Boleta_id_boleta` int NOT NULL,
  PRIMARY KEY (`id_tarj_debito`),
  UNIQUE KEY `Tarj_debito__IDX` (`Boleta_id_boleta`),
  CONSTRAINT `Tarj_debito_Boleta_FK` FOREIGN KEY (`Boleta_id_boleta`) REFERENCES `boleta` (`id_boleta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarj_debito`
--

LOCK TABLES `tarj_debito` WRITE;
/*!40000 ALTER TABLE `tarj_debito` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarj_debito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_plato`
--

DROP TABLE IF EXISTS `tipo_plato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_plato` (
  `id_tipo_plato` int NOT NULL AUTO_INCREMENT,
  `Plato_categoria` varchar(33) NOT NULL,
  `Plato_menu` varchar(44) NOT NULL,
  PRIMARY KEY (`id_tipo_plato`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_plato`
--

LOCK TABLES `tipo_plato` WRITE;
/*!40000 ALTER TABLE `tipo_plato` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_plato` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-15 23:10:48
