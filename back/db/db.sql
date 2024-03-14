CREATE DATABASE db_tareas;

USE db_tareas;

CREATE TABLE usuario (
    id_u INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    user VARCHAR(50),
    email VARCHAR(50),
    pwd VARCHAR(100)
);

CREATE TABLE proyecto (
	id_p INT PRIMARY KEY AUTO_INCREMENT,
    id_u INT,
    nom_p VARCHAR(50),
    des_p VARCHAR(100),
    fecha_i datetime,
    fecha_f datetime,
    FOREIGN KEY (id_u) REFERENCES usuario(id_u)
);

CREATE TABLE actividad (
	id_a INT PRIMARY KEY AUTO_INCREMENT,
    id_p INT,
    id_u INT,
    nom_a VARCHAR(50),
    des_a VARCHAR(100),
    estado BOOLEAN,
    fecha_fin datetime,
    notas VARCHAR(200),
    FOREIGN KEY (id_p) REFERENCES proyecto(id_p),
    FOREIGN KEY (id_u) REFERENCES usuario(id_u)
);

CREATE TABLE tarea (
    id_t INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_a INT NOT NULL,
    estado BOOLEAN,
    FOREIGN KEY (id_a) REFERENCES actividad(id_a)
);