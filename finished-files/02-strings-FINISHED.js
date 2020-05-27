//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/02-strings.js' instead of 'script.js'.

// Question 1
//Create a string variable called firstName and assign it a value equal to your first name. 
//Use single-quotes and the const keyword.

const firstName = 'Nick';

//Question 2
//Create a string variable called lastName and assign it a value equal to your last name. 
//Use double-quotes and the var keyword.

var lastName = "McCullum";

//Question 3
//Create a string variable called cityName and assign it a value equal to the name of the city you live in. 
//Use backticks and the let keyword.

let cityName = `Fredericton`;

//Question 4
//Create a variable called sentence and assign it the value of "It's great to be learning JavaScript!"
//Use any variable initialization keyword and any types of quotes that you'd like.

const sentence = `It's great to be learning JavaScript!`;

//Question 5
//Write a three-line string in JavaScript and assign it to a variable called fullName. 
//The three lines should contain your first, middle, and last names, respectively.
//Use any variable initialization keyword that you'd like.

const fullName = `
Nicholas
James
McCullum`;

//Question 6
//Using the money variable declared below, interpolate the variable into a sentence variable called mySentence that reads:
//"I just found 20 dollars!"
//And log that sentence to the console

const money = 20;

//Solution goes here

const mySentence = `I just found ${money} dollars!`;
console.log(mySentence);

//Question 7
//Given the string unknownLength declared below, calculate its length and log its length to the console.

const unknownLength = 'Please determine the length of this string.';

//Solution goes here

console.log(unknownLength.length);

//Question 8
//Log the sixth letter of the following sentence to the console.

const anotherSentence = `Please log my sixth character to the console.`;

//Solution goes here

console.log(anotherSentence[5]);

//Question 9
//Given the string makeMeAList declared below, generate a list where each element is a word from the sentence.
//Log this list to the console.

const makeMeAList = `Transform me into a list!`;

//Solution goes here

console.log(makeMeAList.split(' '));

//Question 10
//Given the sentence introduceYourself below, log it to the console twice.
//In the first console.log statement, transform the string into all uppercase letters.
//In the second console.log statement, transform the string into all lowercase letters.

const introduceYourself = `Hey, my name is Nick!`;

//Solution goes here

console.log(introduceYourself.toUpperCase());
console.log(introduceYourself.toLowerCase());
