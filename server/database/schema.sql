CREATE DATABASE IF NOT EXISTS revizone_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

use revizone_db;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    display_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM(
        'user',
        'movie_critic',
        'series_critic',
        'game_critic'
    ) NOT NULL DEFAULT 'user',
    critic_status ENUM(
    	'none',
        'pending',
        'approved',
        'rejected'
    ) NOT NULL DEFAULT 'none',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);