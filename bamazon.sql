CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(60) NOT NULL,
	department_name VARCHAR(60) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spyro", "electronics", 45.00, 30), 
("bathing suit", "appreal", 12.40, 300), 
("water bottles", "rec", 4.00, 50), 
("chair", "home", 43.60, 9), 
("backpack", "rec", 200.00, 1), 
("vitamins", "health", 10.00, 23), 
("Howl's Moving Castle", "electronics", 9.00, 3000), 
("dog food", "pets", 22.78, 11), 
("The Great Gastby", "ebook", 6.88, 23), 
("cat tree", "pets", 450.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mario and Luigi", "electronics", 33.78, 365), 
("Game Cube Controller", "electronics", 42.40, 390), 
("Tamagotchi", "Games", 45.88, 505), 
("Nike Shorts", "Apperal", 34.90, 976);


