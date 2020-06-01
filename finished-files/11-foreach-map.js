//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/11-foreach-map.js' instead of 'script.js'.

//Question 1
//Use the forEach method to log every element of the following array to the console.
//Do not create a separate function for this.

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'Go']

//Solution goes here

programmingLanguages.forEach(console.log);

//Question 2
//Create a function called logFirstCharacter that accepts a string 
//and logs the string's first character to the console.
//Apply the function to every item in the programmingLanguages array using the forEach method.

function logFirstCharacter(string){
    console.log(string[0]);
}

programmingLanguages.forEach(logFirstCharacter);

//Question 3
//Create a function called logLastCharacter that accepts a string 
//and logs the string's last character to the console.
//Apply the function to every item in the programmingLanguages array using the forEach method.

function logLastCharacter(string){
    console.log(string[string.length - 1]);
}

programmingLanguages.forEach(logLastCharacter);

//Question 4
//Given the following array of numbers, use an arrow function inside of 
//the forEach method to add 7 to every item in the array.
//Log the modified array to the console after the forEach method is complete. 
//Note that the original array should not be modified.

const numberArray = [5,2,3,81,5,4,7,8,9,6];

//Solution goes here

numberArray.forEach(item => item + 7);
console.log(numberArray);

//Question 5
//Using the map method instead of the forEach method, 
//log the modified array (where each item is increased by 7) to the console.

console.log(numberArray.map(item => item + 7));

//Question 6
//Using the map method, an arrow function, and the lowercaseNames array defined below,
//create a new array called uppercaseNames that has the same strings but with all uppercase letters.
//Log uppercaseNames to the console.
//HINT: You'll need the toUpperCase method.

const lowercaseNames = ['Jonathan', 'Neal', 'Stephen', 'Ross'];

//Solution goes here

const uppercaseNames = lowercaseNames.map(item => item.toUpperCase());
console.log(uppercaseNames);
