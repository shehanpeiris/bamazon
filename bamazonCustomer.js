// Require necessary node packages for app
var mysql = require("mysql");
var inquirer = require("inquirer");

// Create the connection to mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

// Connect to mySQL db and then run the start function
connection.connect(function(err) {
    if (err) throw err;
    appInit();
});

function appInit() {
    inquirer
        .prompt(
            {

            }
        )

}
