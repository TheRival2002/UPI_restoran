CREATE DATABASE UPI_restaurant;

-- Connect to the created database with command below and run the following commands to create the schema
-- \c upi_restaurant;
-- Or you can run the following commands in pgAdmin in query window of created database

/*DROP SCHEMA public CASCADE;
CREATE SCHEMA public;*/ -- Drop the schema if you want to recreate the schema

CREATE TYPE order_status_type AS ENUM ('in-progress', 'delivered', 'canceled');

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO roles (name) VALUES ('admin');
INSERT INTO roles (name) VALUES ('user');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE mealCategory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DOUBLE PRECISION NOT NULL,
    image VARCHAR(255),
    meal_category_id INTEGER NOT NULL,
    FOREIGN KEY (meal_category_id) REFERENCES mealCategory(id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_status order_status_type NOT NULL,
    totalPrice DOUBLE PRECISION NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    meal_id INTEGER NOT NULL,
    amount INTEGER NOT NULL CHECK (amount > 0),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (meal_id) REFERENCES meals(id)
);

CREATE TABLE daily_offers (
    id SERIAL PRIMARY KEY,
    meal_id INTEGER NOT NULL,
    dailyOfferDate TIMESTAMP NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meals(id)
);