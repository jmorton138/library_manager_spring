DROP TABLE IF EXISTS book CASCADE;

CREATE TABLE book (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(100)
);