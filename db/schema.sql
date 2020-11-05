CREATE DATABASE IF NOT EXISTS blog;

USE blog;

CREATE TABLE IF NOT EXISTS post (
  id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO post (id, title, content) 
VALUES (1, 'using the serverless framework with AWS', 'This is the content of the the test post')