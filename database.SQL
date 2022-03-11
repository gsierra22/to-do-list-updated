--Create Database
CREATE DATABASE "to-do-list";

--Next Create List Table
CREATE TABLE list (
    id SERIAL PRIMARY KEY,
    tasks text,
    task_completed boolean
);
