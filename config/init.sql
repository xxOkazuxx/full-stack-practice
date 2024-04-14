CREATE TABLE IF NOT EXISTS USERS (
    ID serial primary key,
    NAME text,
    AGE int
);

INSERT INTO USERS (NAME, AGE) VALUES ('Alice', 30), ('Bob', 40);