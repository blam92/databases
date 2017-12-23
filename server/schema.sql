CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
	id INT NOT NULL AUTO_INCREMENT, 
	username VARCHAR(30),
	roomname VARCHAR(30),
	message VARCHAR(1000),
	created_at DATE,
	PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

