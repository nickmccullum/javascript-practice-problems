//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/08-flow-control.js' instead of 'script.js'.

//Question 1
//Write an if statement that logs "The variable is true" to the console if var1 is equal to true.

let var1 = true;

//Solution goes here

if(var1 === true){
    console.log("The variable is true");
}

//Question 2
//Write an if statement that logs "The integer is less than 10" if the variable int1 is less than 10.

const int1 = 15;

//Solution goes here

if(int1 < 10){
    console.log("The integer is less than 10");
}

//Question 3
//Write an if statement that logs "The integer is greater than or equal to 5" 
//if the variable int2 is greater than of equal to 5.

const int2 = 5;

//Solution goes here

if(int2 >= 5){
    console.log("The integer is greater than or equal to 5");
}

//Question 4
//Write an if statement that logs "The integer is not equal to 2"
//If int3 is not equal to 2.

const int3 = 16;

//Solution goes here

if(int3 != 2){
    console.log("The integer is not equal to 2");
}

//Question 5
// Write an if statement with an else if and else clause.
//If the variable int4 is equal to 2, it should log "The variable is equal to 2" to the console.
//If the variable int4 is equal to 7, it should log "The variable is equal to 7" to the console.
//Otherwise, the script should log "The variable is not equal to 2 or 7" to the console.

const int4 = 5;

//Solution goes here

if(int4 === 2){
    console.log('The variable is equal to 2');
} else if (int4 === 7){
    console.log("The variable is equal to 7");
} else {
    console.log("The variable is not equal to 2 or 7");
}

//Question 6
//Write a function called nameClassifer.
//It should accept one argument, name.
//If name has more than 5 characters, the function should return "You have a long name!".
//If name has 5 characters or less, the function should return "You have a short name!".
//Run the function with a few different arguments to make sure it is working properly.

function nameClassifier(name){
    if(name.length > 5){
        return "You have a long name!";
    }
    return "You have a short name!";
}

console.log(nameClassifier("Nick"));
console.log(nameClassifier("Rosalynn"));

//Question 7
//Write an if statement that logs "You are a teenager" to the console if age is between 10 and 19 (inclusive).

const age = 15;

if(age >= 10 && age <=19){
    console.log("You are a teenager!");
}

//Alternate solution

if(age > 9 && age < 20){
    console.log("You are a teenager!");
}
