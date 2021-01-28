CREATE DATABASE   `blog` ;
USE `blog`;
CREATE TABLE `blog`.`usuario` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `nome_user` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_user`));

CREATE TABLE `blog`.`post` (
  `id_post` INT NOT NULL AUTO_INCREMENT,
  `titlepost` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NULL,
  `mensagem` VARCHAR(45) NULL,
  `id_user` VARCHAR(45) NULL,
  PRIMARY KEY (`id_post`));
  
INSERT INTO `usuario` VALUES (1,'Elizeu Luis'),(2,'Juquinha Alves'),(3,'Samuel Porto'),(4,'Romario Lima'),(5,'Lucas');
INSERT INTO `blog`.`post` (`titlepost`, `categoria`, `mensagem`, `id_user`) VALUES ('Lista de compras', 'Mercado', 'Alho, cebola e pimenta', '2');
INSERT INTO `blog`.`post` (`titlepost`, `categoria`, `mensagem`, `id_user`) VALUES ('Anotações da aula', 'Aula', 'Primeira anotação', '5');