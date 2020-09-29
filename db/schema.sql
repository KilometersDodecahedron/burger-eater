DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id int auto_increment not null,
    burger_name VARCHAR(255) not null,
    -- the "devoured" var tells it whether the burger has been eaten, 0 for no, 1 for yes
    devoured tinyint default 0,
    primary key (id)
);