CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT, 
	name VARCHAR(30),
	PRIMARY KEY (id)
);

CREATE TABLE rooms (
	id INT NOT NULL AUTO_INCREMENT, 
	name VARCHAR(30),
	PRIMARY KEY (id)
);

CREATE TABLE messages (
	id INT NOT NULL AUTO_INCREMENT, 
	user_id INT,
	room_id INT,
	message VARCHAR(1000),
	created_at DATE,
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

