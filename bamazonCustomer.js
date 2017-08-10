// Libraries
var inquirer = require('inquirer');
var mysql = require('mysql');
var chalk = require('chalk');

const dashes = "----------------------------";

// Connect with database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "Kihyun12!",
    database: "bamazon"
});

connection.connect(function (error) {
    if (error) throw error;
    initialRun();
});

// Display and perform actions
function initialRun() {
    var query = "SELECT * FROM products";

    // Executes query
    connection.query(query, function (error, result) {
        console.log(chalk.green.bold("\nCurrent Products in Bamazon"));
        console.log(chalk.green.bold(dashes));

        for (var i = 0; i < result.length; i++) {
            console.log(chalk.bold(result[i].id + " | ") + result[i].product_name + " ---- $" + chalk.red(result[i].price));
        }

        // Purchase
        custPurchase();
    });
};

// Search function
function custPurchase() {
    inquirer
        .prompt({
            name: "options",
            type: "list",
            message: "Would you like to make a purchase?: ",
            choices: [
                "Yes",
                "No"
            ]
        })
        .then(function (answer) {
            inquirer
                .prompt([
                    {
                        name: "buy",
                        type: "input",
                        message: "Please enter the ID of the product you would like to buy: ",
                        validate: function (value) {
                            if (isNaN(value) === false) {
                                return true;
                            }
                            return false;
                        }
                    },
                    {
                        name: "numberOfUnits",
                        type: "input",
                        message: "How many would you like to buy?: ",
                        validate: function (value) {
                            if (isNaN(value) === false) {
                                return true;
                            }
                            return false;
                        }
                    }
                ])
                .then(function (answer) {
                    console.log(answer.buy + " " + answer.numberOfUnits);
                })
        })

}
