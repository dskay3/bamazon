-- Creates database if bamazon does not exist.
CREATE DATABASE IF NOT EXISTS bamazon;

-- Use bamazon database.
USE bamazon;

-- Creates table products
CREATE TABLE IF NOT EXISTS products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(30),
    price FLOAT(11) NOT NULL,
    stock_quantity INTEGER(200) NOT NULL,
    PRIMARY KEY (id)
);

-- First product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Swimming Goggles", "Sports", 20, 24);

-- Second product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Surface Book", "Electronics", 2500, 9);

-- Third product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Arteza Woodless Watercolor Pencils", "Supplies", 19.99, 19);

-- Fourth product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motorola Nexus 6 Unlocked", "Electronics", 229.99, 3);

-- Fifth product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LUENX Aviator Sunglasses", "Fashion", 15.29, 49);

-- Sixth product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ONSON Micro USB Cable", "Electronics", 9.74, 12);

-- Seventh product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Titanium Bonded Scissors", "Supplies", 6.30, 99);

-- Eighth product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("No Show Liner Socks", "Fashion", 9.99, 100);

-- Ninth product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Boy Clothes Long", "Baby Clothes", 8, 22);

-- Tenth product
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kindle Fire", "Electronics", 160, 101);

-- Eleventh product. Demo of 0 stock_quantity.
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro", "Electronics", 2500, 0);

-- Select all products in database.
SELECT * FROM products;