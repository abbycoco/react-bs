# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.16)
# Database: react
# Generation Time: 2017-04-05 02:53:34 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `endPlace` char(30) NOT NULL DEFAULT '',
  `startPlace` char(30) NOT NULL DEFAULT '',
  `price` char(100) NOT NULL DEFAULT '',
  `description` char(100) NOT NULL DEFAULT '',
  `ridetype` char(100) NOT NULL DEFAULT '',
  `ridetime` char(100) NOT NULL DEFAULT '',
  `detailDate` char(100) NOT NULL DEFAULT '',
  `usertel` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;

INSERT INTO `order` (`id`, `endPlace`, `startPlace`, `price`, `description`, `ridetype`, `ridetime`, `detailDate`, `usertel`)
VALUES
	(1,'12','12','21','12','12','212','','12'),
	(2,'','','','','','','','21'),
	(3,'12','12','12','21','车找人','2017-04-01','17:22','21'),
	(4,'12','12','12','21','车找人','2017-04-01','17:22','21'),
	(5,'212','12','12','21','车找人','2017-04-05','10:30',''),
	(6,'212','12','12','21','车找人','2017-04-05','10:30','15690853492'),
	(7,'212','12','12','21','车找人','2017-04-05','10:30','15690853492'),
	(8,'32','23','32','32','车找人','2017-04-05','10:50','15690853492');

/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  `phone` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`id`, `name`, `phone`, `password`)
VALUES
	(10,'hux','15690853492','12132'),
	(11,'12','21','21'),
	(13,'kjx','180','521'),
	(14,'hux','123456','123456'),
	(15,'kjx','1806','123'),
	(16,'kjx','189','123'),
	(18,'12','211','21'),
	(19,'柯俊兴','18060020175','123456'),
	(20,'hux','13839272243','123'),
	(21,'hux','13839272244','123456'),
	(22,'yuyu','15690853482','123456'),
	(23,'户鑫2332','15690853494','123456');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
