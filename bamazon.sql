-- Initial code to set up database and create products table
DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(4) NOT NULL,
  PRIMARY KEY (item_id)
);

-- Inserting mock data to the products table
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Sony MDR7506 Headphones", "Audio equipment", 99.99, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bose Surround Sound Speakers", "Audio equipment", 299.99, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Web Design with HTML, CSS, JavaScript and jQuery book set", "Books", 35.47, 35);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Nespresso Vertuo Coffee and Espresso Machine", "Coffee", 175.00, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Rubber Ducky", "Toys", 2.99, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Health and Wellness", 11.99, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Meditation Stool", "Health and Wellness", 35.00, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Smiley Face Stress Ball", "Health and Wellness", 2.99, 70);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Microsoft Surface Pro 6", "Computers", 799.00, 35);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Logitech Wireless Mouse", "Computer Accessories", 19.99, 55);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Logitech Wireless Keyboard", "Computer Accessories", 46.99, 25);