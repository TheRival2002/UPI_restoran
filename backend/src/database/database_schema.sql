CREATE TYPE order_status_type AS ENUM ('in-progress', 'delivered', 'canceled');

CREATE TABLE roles (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    surname  VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id  INTEGER      NOT NULL,
    username VARCHAR(255) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);
ALTER TABLE users
ADD CONSTRAINT unique_username UNIQUE (username);

CREATE TABLE meal_categories (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE meals (
    id               SERIAL PRIMARY KEY,
    name             VARCHAR(255)     NOT NULL,
    description      VARCHAR(255),
    price            DOUBLE PRECISION NOT NULL,
    image            VARCHAR(255),
    meal_category_id INTEGER          NOT NULL,
    FOREIGN KEY (meal_category_id) REFERENCES meal_categories(id)
);

CREATE TABLE orders (
    id           SERIAL PRIMARY KEY,
    user_id      INTEGER           NOT NULL,
    order_status order_status_type NOT NULL,
    total_price  DOUBLE PRECISION  NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id          SERIAL PRIMARY KEY,
    order_id    INTEGER          NOT NULL,
    meal_id     INTEGER          NOT NULL,
    amount      INTEGER          NOT NULL CHECK (amount > 0),
    total_price DOUBLE PRECISION NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);

CREATE TABLE daily_offers (
    id               SERIAL PRIMARY KEY,
    meal_id          INTEGER   NOT NULL,
    daily_offer_date TIMESTAMP NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meals(id) ON DELETE CASCADE
);
