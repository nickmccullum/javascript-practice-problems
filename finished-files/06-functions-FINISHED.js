//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/06-functions.js' instead of 'script.js'.

//Question 1
//Create a JavaScript function called sayHi that logs 'Hi' to the console when it is executed.
//Run the function.

function sayHi(){
    console.log('Hi');
}
sayHi();

//Question 2
//Create a JavaScript function called salutations that contains two separate console.log statements.
//The first statement logs "Hello." to the console.
//The second statement logs "Goodbye." to the console.
//Run the function.

function salutations(){
    console.log('Hello.');
    console.log('Goodbye.');
}
salutations();

//Question 3
//Create a JavaScript function called misterMaker.
//The function accepts a name as an argument.
//When passed in "Nick" for a name, the function should return "Hello, Mr. Nick!"
//Once the function is created, run it to make sure it's working properly.

function misterMaker(name){
    console.log(`Hello, Mr. ${name}!`);
}
misterMaker('Nick');

//Question 4
//Imagine that you work at the corporate headquarters of a retailer that is closing a location.
//That location is having a clearance sale to get its inventory out the door quickly.
//Every item is 20% off.
//Write a function called calculateNewPrice that accepts an old price, and prints "The new price is $X.XX" to the console.
//Run this function with a price of your choice and make sure it's working properly.

function calculateNewPrice(oldPrice){
    console.log(`The new price is $${oldPrice*0.8}`);
}
calculateNewPrice(100);

//Question 5
//Write a JavaScript function called printSum.
//This function should accept two integers as arguments.
//When run, this function should print "The sum of these integers is X." to the console.
//Run the function to make sure it's working properly.

function printSum(x, y){
    console.log(`The sum of these integers is ${x+y}.`);
}
printSum(2,4);


//Question 6
//Transform the following function into an arrow function called sayHello.
//Run the arrow function to make sure it's working properly.

function printHello(){
    console.log("Hello");
};

//Solution goes here

const sayHello = () => console.log('Hello');
sayHello();

//Question 7
//Transform the following function into an arrow function called calculateRectArea.
//Run the arrow function to make sure it's working properly.

function getRectArea(width, height) {
    return width * height;
};

//Solution goes here

const calculateRectArea = (width, height) => width*height;
console.log(calculateRectArea(2,4));

//Question 8
//In our lesson on JavaScript functions, we built a function called calculateSales Tax (included below).
//Transform this function into an arrow function named salesTaxCalculator.
//Run the arrow function to make sure it's working properly.

function calculateSalesTax(price, taxRate = 0.15){
	return price*taxRate;
};

//Solution goes here

const salesTaxCalculator = (price, taxRate) => price*taxRate;
console.log(salesTaxCalculator(100,0.15));
