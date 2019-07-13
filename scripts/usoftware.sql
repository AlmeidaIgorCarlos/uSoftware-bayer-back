CREATE DATABASE usoftware;

CREATE TABLE recruiter(
	recruiter_id INT IDENTITY(1,1),
    name VARCHAR(30),
    lastName VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30),
    isActive TINYINT(1),
    PRIMARY KEY(recruiter_id)
);

CREATE TABLE vacancy(
	vacancy_id INT IDENTITY(1,1),
    job TEXT,
    isAvaliable TINYINT(1),
    isActive TINYINT(1),
    recruiter_id INT,
    PRIMARY KEY(vacancy_id)
);

CREATE TABLE requeriment(
	requeriment_id INT IDENTITY(1,1),
    name VARCHAR(30),
    isRequired TINYINT(1),
    isActive TINYINT(1),
    PRIMARY KEY(requeriment_id)
);

CREATE TABLE vacancy_requeriment(
	vacancy_requeriment_id INT IDENTITY(1,1),
    isActive TINYINT(1),
    requeriment_id INT,
    vacancy_id INT,
    PRIMARY KEY(vacancy_requeriment_id)
    CONSTRAINT fk_vacancy_vacancy_requeriment FOREIGN KEY vacancy_id REFERENCES vacancy(vacancy_id),
    CONSTRAINT fk_requeriment_vacancy_requeriment FOREIGN KEY requeriment_id REFERENCES requeriment(requeriment_id)
);

CREATE TABLE user(
	user_id INT IDENTITY(1,1),
    name VARCHAR(30),
    lastName VARCHAR(30),
    age TINYINT,
    address VARCHAR(255),
    mobilePhone VARCHAR(11),
    email VARCHAR(30),
    PRIMARY KEY(user_id)
);

CREATE TABLE user_vacancy(
	user_vacancy_id INT IDENTITY(1,1),
    isDismissed TINYINT(1),
    isActive TINYINT(1),
    approvalRate INT,
    user_id INT,
    vacancy_id INT, 
    PRIMARY KEY(user_vacancy_id),
    CONSTRAINT user_user_vacancy FOREIGN KEY user_id REFERENCES user(user_id),
    CONSTRAINT vacancy_user_vacancy FOREIGN KEY vacancy_id REFERENCES vacancy(vacancy_id)
);

CREATE TABLE skill(
	skill_id INT IDENTITY(1,1),
    skill VARCHAR(30),
    isActive TINYINT(1),
    PRIMARY KEY(skill_id)
);

CREATE TABLE user_skill(
	user_skill_id INT IDENTITY(1,1),
    isActive TINYINT(1),
    skill_id INT,
    user_id INT,
    PRIMARY KEY(user_skill_id),
    CONSTRAINT skill_user_skill FOREIGN KEY skill_id REFERENCES skill(skill_id),
    CONSTRAINT user_user_skill FOREIGN KEY user_id REFERENCES user(user_id)
);