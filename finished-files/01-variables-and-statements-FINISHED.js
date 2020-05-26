//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/01-variables-and-statements.js' instead of 'script.js'.

// Question 1
//What are the three keywords that you can use to declare variables in JavaScript?

//The three keywords are var, let, and const.

//Question 2
//Create a JavaScript variable using the var keyword. 
//Give it a value of 'javascript' and make the variable name 'language'.

var language = 'javascript';

//Question 3
//Log the `language` variable to the console. 
//Refresh the index.html file and make sure that the variable does indeed log to the console.

console.log(language);

//Question 4
//Create a JavaScript variable using the let keyword. 
//Give it a value equal to your current age and make the variable name 'age'.

let age = 24;

//Question 5
//Log the `age` variable to the console. 
//Refresh the index.html file and make sure that the variable does indeed log to the console.

console.log(age);

//Question 6
//Create a JavaScript variable using the const keyword. 
//Give it a value equal to your name and make the variable name 'myName'.

const myName = 'Nick';

//Question 7
//Log the `myName` variable to the console. 
//Refresh the index.html file and make sure that the variable does indeed log to the console.

console.log(myName);

//Question 8
//Attempt to modify the myName variable. 
//Since it was declared using the const keyword, it can't be modified, so this should generate an error.

// myName = 'McCullum'; 
//^I commented this out so the rest of my code would run properly

//Question 9
//If you are unsure how you will be using a variable in your application, which keyword should you use to declare it?

//The const keyword!

//Question 10
//How do you enable strict mode in JavaScript?

'use strict';
