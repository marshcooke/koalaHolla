-- Create database
CREATE DATABASE koala_holla;

-- Create table
CREATE TABLE inventory (
	id SERIAL PRIMARY KEY,
	name varchar(20),
	age int,
	gender varchar(1),
	transfer boolean,
	notes varchar(30),
	mark_ready boolean
);