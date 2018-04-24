\c digital_seafood_db


DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS user_table;
DROP TABLE IF EXISTS one_order;


CREATE TABLE inventory (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(255),
  item_cost INTEGER,
  item_description VARCHAR(500)
);

CREATE TABLE user_table (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  security VARCHAR(255)
);

CREATE TABLE one_order (
  order_id SERIAL PRIMARY KEY,
  order_number INTEGER,
  item_id INTEGER,
  user_id INTEGER
);
