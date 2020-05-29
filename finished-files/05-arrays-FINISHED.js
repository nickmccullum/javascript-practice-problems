//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/05-arrays.js' instead of 'script.js'.

// Question 1
//Create a JavaScript arrays that contains two elements. 
//The elements should be your first and last name.
//Assign this array to a variable named myNames.

const myNames = ['Nick', 'McCullum'];

//Question 2
//Log the second element of this array to the console.

console.log(myNames[1]);

//Question 3
//Calculate the length of this array and log it to the console.

console.log(myNames.length);

//Question 4
//Access the last item of the following JavaScript array and log it to the console.

longArray = [1, 2, 3, 7, 6, 9, 7, 5, 3, 4, 7, 9, 6, 1, 5, 8];

//Solution goes here

console.log(longArray[longArray.length -1]);

//Question 5
//Depending on your opinion of this course so far,
//Add either "best" or "worst" to the end of the following array.
//Log the new array to the console.

const sentenceArray = ['This', 'course', 'is', 'the'];

//Solution goes here

sentenceArray.push('best');
console.log(sentenceArray);

//Question 6
//Add 10 to the start of the following array.
//Log the new array to the console.

const multiplesOfTen = [20, 30, 40, 50];

//Solution goes here

multiplesOfTen.unshift(10);
console.log(multiplesOfTen);

//Question 7
//Reverse the order of the following array.
//Assign the reversed array to a new variable called reversedArray.
//Log reversedArray to the console.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Solution goes here:

const reversedArray = numbers.reverse();
console.log(reversedArray);

//Question 8
//Use the slice method to select mushrooms and onions from the following array.
//Assign these two items to a new array called someIngredients.
//Log someIngredients to the console.

const allIngredients = ['pepperoni', 'sauce', 'flour', 'mushrooms', 'onions', 'green peppers', 'cheese'];

//Solution goes here

const someIngredients = allIngredients.slice(3,5);
console.log(someIngredients);

//Question 9
//What is the main difference between the slice and splice methods?

//The splice method is mutable and takes a 'count' argument instead of an 'end' argument

//Question 10
//Use the spread operator combined with the slice method to add'PEI' between 'Nova Scotia' and 'New Brunswick'.
//Assign the new array to a variable called maritimeProvinces.
//Log this array to the console.

const someProvinces = ['Nova Scotia', 'New Brunswick'];

//Solution goes here

const maritimeProvinces = [
    ...someProvinces.slice(0,1),
    'PEI',
    ...someProvinces.slice(1)
];
console.log(maritimeProvinces);

//Question 11
//Use the spread operator and the slice method to remove 'ethane' from the following array.
//Store the new array in a variable called someHydrocarbons
//Log the new array to the console.

const allHydrocarbons = ['methane', 'ethane', 'propane', 'butane', 'pentane', 'hexane', 'heptane', 'octane', 'nonane', 'decane'];

//Solution goes here

const someHydrocarbons = [
    ...allHydrocarbons.slice(0,1),
    ...allHydrocarbons.slice(2)
];

console.log(someHydrocarbons);

//Question 12
//Create a copy of the allHydrocarbons array and store it in a variable called hydrocarbonCopy

const hydrocarbonCopy = [...allHydrocarbons];
