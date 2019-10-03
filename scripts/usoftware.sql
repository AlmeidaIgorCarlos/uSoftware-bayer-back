CREATE DATABASE uSoftware;

USE uSoftware;

CREATE TABLE recruiter(
recruiter_id INT IDENTITY(1,1),
    name VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    isActive bit,
    PRIMARY KEY(recruiter_id)
);

CREATE TABLE vacancy(
	vacancy_id INT IDENTITY(1,1),
    job TEXT,
    isAvaliable bit,
    isActive bit,
    recruiter_id INT,
    description NVARCHAR(500),
    PRIMARY KEY(vacancy_id)
);

CREATE TABLE requirement(
requirement_id INT IDENTITY(1,1),
    name VARCHAR(30),
    isRequired TINYINT,
    isActive bit,
    PRIMARY KEY(requirement_id)
);

CREATE TABLE vacancy_requirement(
vacancy_requirement_id INT IDENTITY(1,1),
    isActive bit,
    requirement_id INT,
    vacancy_id INT,
    PRIMARY KEY(vacancy_requirement_id),
    FOREIGN KEY (vacancy_id) REFERENCES vacancy(vacancy_id),
    FOREIGN KEY (requirement_id) REFERENCES requirement(requirement_id)
);

CREATE TABLE users(
user_id INT IDENTITY(1,1),
    name VARCHAR(255),
    lastName VARCHAR(255),
    mobilePhone VARCHAR(255),
    email VARCHAR(255),
    isActive bit,
    password varchar(255),
    PRIMARY KEY(user_id)
);


CREATE TABLE user_vacancy(
user_vacancy_id INT IDENTITY(1,1),
    isDismissed bit,
    isActive bit,
    approvalRate INT,
    user_id INT,
    vacancy_id INT,
    isHired bit,
    PRIMARY KEY(user_vacancy_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (vacancy_id) REFERENCES vacancy(vacancy_id)
);
-- insert into users values('igor', 'almeida', 19, 'barueri', '99888', '@goht', '1', '123')
-- insert into recruiter values ('testeR', 'last', 'recruiter@gmail.com', '123', 1)

-- CREATE TABLE skill(
-- skill_id INT IDENTITY(1,1),
--     skill VARCHAR(30),
--     isActive bit,
--     PRIMARY KEY(skill_id)
-- );

-- CREATE TABLE user_skill(
-- user_skill_id INT IDENTITY(1,1),
--     isActive bit,
--     skill_id INT,
--     user_id INT,
--     PRIMARY KEY(user_skill_id),
--     FOREIGN KEY (skill_id) REFERENCES skill(skill_id),
--     FOREIGN KEY (user_id) REFERENCES users(user_id)
-- );

--drop tables

DROP TABLE recruiter
DROP TABLE vacancy
DROP TABLE requirement
DROP TABLE vacancy_requirement
DROP TABLE users
DROP TABLE user_vacancy
DROP TABLE skill
DROP TABLE user_skill