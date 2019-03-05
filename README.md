# Bamazon Storefront CLI App
A command-line app allowing the user to interact with the Bamazon store and purchase products.

## How to Use the Bamazon App

1. User opens directory in terminal and installs dependencies in package.json file
2. schema.sql file contains MySQL code to create product database; seeds.sql file contains code to populate data base with data.

![Initial products database](images/database1.png)


3. User runs "node bamazonCustomer.js" in terminal and is greeted with a list of the inventory
based on the MySQL database.

![CLI Interface](images/cli1.png)


4. User is prompted to enter the id of the product they want to buy and then the number of that product. If the product is in stock, the order goes through, the database is updated accordingly and the total price is displayed to user.

![CLI Interface](images/cli2.png)


5. If user tries to buy more of a product than Bamazon has in stock, the order doesn't go through (database is unchanged) and the user is asked if she/he wants to buy another item or exit the app/store.

![CLI Interface](images/cli3.png)
