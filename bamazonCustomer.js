var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});
//===============================================================

// validateInput makes sure that the user is entering only positive numbers for their inputs. 
// used for 'validate' in inquirer prompt
function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole number.';
    }
}

// promptUserPurchase will prompt the user for the item/quantity they would like to purchase
function promptUserPurchase() {

    //using inquirer npm --- prompting the user to select an item
    inquirer.prompt([{
            type: 'input',
            name: 'item_id',
            message: 'Please enter the Item ID which you would like to purchase.',
            validate: validateInput, //from validateInput above // 
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many do you need?',
            validate: validateInput,
            filter: Number
        }
    ]).then(function (input) {
        
        var item = input.item_id;
        var quantity = input.quantity;

        // query db to confirm that the given item ID exists in the desired quantity
        var queryDB = 'SELECT * FROM products WHERE ?';

        connection.query(queryDB, {
            item_id: item
        }, function (err, data) {
            if (err) throw err;

            if (data.length === 0) { //displays comment if user enters the wrong ID
                console.log('ERROR: Invalid Item ID. Please select a valid ID from list.');
                loadProducts();

            } else {
                var productData = data[0];

                // if the quantity requested by the user is in stock, displays comment 
                if (quantity <= productData.stock_quantity) {
                    console.log('YO!!, the product you requested is in stock!!');

                    // making the new query DB string ****** 
                    var updateQueryDB = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    

                    // Update products
                    connection.query(updateQueryDB, function (err, data) {
                        if (err) throw err;

                        console.log('Your order has been placed! Your total is $' + productData.price * quantity);
                        console.log('Enjoy it!!');
                        console.log("\n---------------------------------------------------------------------\n");

                        // End the database connection
                        connection.end();
                    })
                } else { 
                    // if the quantity requested by the user is not in stock, displays comments 
                    console.log('Bummer! We do not have enough inventory to fill your request.');
                    console.log('Please choose a different quantity, or select another ID.');
                    console.log("\n---------------------------------------------------------------------\n");

                    loadProducts();
                }
            }
        })
    })
}

// loadProducts will retrieve the current inventory from the database and display to the console
function loadProducts() {

    // make the db query string
    queryDB = 'SELECT * FROM products';

    // update query db table
    connection.query(queryDB, function (err, data) {
        if (err) throw err;

        console.log('Bamazon Inventory: ');
        console.log
        ("---------------------------------------------------------------------\n");

        //displays the table in a easy way to read it // 
        var dataTable = '';
        for (var i = 0; i < data.length; i++) {
            dataTable = '';
            dataTable += 'Item ID: ' + data[i].item_id + '  ||  ';
            dataTable += 'Product Name: ' + data[i].product_name + '  ||  ';
            dataTable += 'Department: ' + data[i].department_name + ' ||  ';
            dataTable += 'Price: $' + data[i].price + '\n';

            console.log(dataTable);
        }

        console.log("---------------------------------------------------------------------\n");

        //prompt the user for item/quantity they would like to purchase
        promptUserPurchase();
    })
}

// runBamazon will execute the main application logic
function runBamazon() {


    // Display the available items
    loadProducts();
}

// Run the application logic
runBamazon();
