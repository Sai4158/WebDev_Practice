let jsonString = '{"product": "Laptop", "price": 1200, "inStock": true}';

// Parse the JSON string into a JavaScript object
let productObj = JSON.parse(jsonString);

// Modify the price property to 1000
productObj.price = 1000;

productObj.discount = 0.1;

// Log the updated object to the console
console.log(productObj);

// Convert the updated object back to a JSON string
let updatedJsonString = JSON.stringify(productObj);

// Log the updated JSON string
console.log(updatedJsonString);
