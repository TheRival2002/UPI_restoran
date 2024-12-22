-- Seed users table
INSERT INTO users (name, surname, email, password, username, role_id) VALUES
    ('Admin', 'User', 'admin@example.com', '1234', 'admin', 1),
    ('Regular', 'User', 'user@example.com', '1234', 'demo_user', 2);

-- Seed meal_categories table
INSERT INTO meal_categories (name) VALUES
    ('Appetizers'),
    ('Main Courses'),
    ('Desserts'),
    ('Drinks');

-- Seed meals table
INSERT INTO meals (name, description, price, image, meal_category_id) VALUES
    ('Caesar Salad', 'Fresh romaine lettuce with Caesar dressing', 7.99, null, 1),
    ('Grilled Chicken', 'Juicy grilled chicken with herbs', 12.99, null, 2),
    ('Chocolate Cake', 'Rich and moist chocolate cake', 5.99, null, 3),
    ('Lemonade', 'Refreshing lemonade', 2.99, null, 4);

-- Seed orders table
INSERT INTO orders (user_id, order_status, total_price) VALUES
    (2, 'canceled', 20.97),
    (2, 'delivered', 10.98);

-- Seed order_items table
INSERT INTO order_items (order_id, meal_id, amount, total_price) VALUES
    (1, 1, 2, 15.98),
    (1, 2, 1, 12.99),
    (2, 4, 3, 8.97);

-- Seed daily_offers table
INSERT INTO daily_offers (meal_id, daily_offer_date) VALUES
    (3, '2024-12-22'),
    (4, '2024-12-22');
