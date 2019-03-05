// Require dependencies for app
var mysql = require("mysql");
var inquirer = require("inquirer");

// Create connection to mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});

// Connect to mySQL db and run initial function to show user
// inventory that can be purchased
connection.connect(function(err) {
    if (err) throw err;
    displayInventory();
});

// Build initial function to display inventory
function displayInventory() {
    var query = connection.query(
    "SELECT * FROM products",
    function(err,res) {
        console.log("\nWelcome to the Bamazon Store! \nHere is our product inventory: ");
        // Loop through products table to display every item and relevant info
        for (var i=0; i<res.length; i++){
            console.log("\nItem ID: " + res[i].item_id + "\nProduct Name: " + res[i].product_name + "\nPrice: " + res[i].price + "\n----------");
        };
        // Run function to initiate user interactivity
        appInit();
    });
};

// Build inquirer function to capture user input
function appInit() {
    inquirer
        .prompt([
            {
                name: "productChoice",
                type: "input",
                message: "Please enter the Item ID of the product you want to purchase:"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units of the product would you like to buy?"
            }
        ]).then(function(answer){
            var productID = answer.productChoice;
            var quantity = parseInt(answer.quantity);
            // Query MySQL db based on user's answers
            connection.query(
                "SELECT * FROM products WHERE item_id = " + productID, function(err, res) {
                    if (res[0].stock_quantity >= quantity) {
                        console.log("\n-----------------------\nYour order went through!\nYour total price: $" + (res[0].price*quantity).toFixed(2) + "\nThank you for shopping with Bamazon!");
                        var remaining = res[0].stock_quantity - quantity;
                        // Call function to update inventory after customer's order
                        updateInventory(productID, remaining);
                    } else {
                        console.log("\n-----------------------\nUnfortunately we don't have enough of that product to fulfill your order.\nPlease try a smaller order or feel free to browse the rest of our selection.");
                        userRedirect();
                    }
                }
            );
        });
};

// Build function to update database based on customer's order, taking in two arguments
function updateInventory(id, num) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: num
              },
              {
                item_id: id
              }
            ],
            function(error) {
                if (error) throw error;
                userRedirect();
            }
        );
};

function userRedirect() {
    inquirer
        .prompt([
            {
                name: "stayHere",
                type: "confirm",
                message: "Is there anything else you'd like to buy?"
            }
        ]).then(function(answer){
            if(answer.stayHere) {
                displayInventory();
            } else {
                console.log("We're sorry to see you go. Have a wonderful day!");
                connection.end();
            }
        });
};
