// Libraries
var inquirer = require('inquirer');
var mysql = require('mysql');
var chalk = require('chalk');

const dashes = "----------------------------";

// Parameters to connect with DB
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: "root",
	password: "Kihyun12!",
	database: "bamazon"
});

// Connects SQL DB with Node
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

		console.log(chalk.green(dashes));
		custPurchase();
	});
};

// Customer purchase function
function custPurchase() {
	// Prompts that ask if the customer wants to make a purchase
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
			// Executes when yes is selected
			if (answer.options === "Yes") {
				// Prompts that ask what item to buy and the number to purchase
				inquirer
					.prompt([
							{
								name: "buyID",
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
								name: "numUnits",
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
						purchaseItem(answer.buyID, numUnits)
					})
			}
			// Terminates the connection since it is not needed anymore	
			else {
				connection.end();
			}
	})
}
