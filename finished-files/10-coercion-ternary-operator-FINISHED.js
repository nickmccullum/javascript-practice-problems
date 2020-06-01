//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/10-coercion-ternary-operator.js' instead of 'script.js'.

//Question 1
//The string 'JavaScript' is a truthy value.
//Use JavaScript coercion to log 'true' to the console using just the string variable and the bang operator.

truthyString = 'JavaScript';

//Solution goes here

console.log(!!truthyString);

//Question 2
//Use a similar technique to log 'false' to the console.

console.log(!truthyString);

//Question 3
//Change the following if/else statement into a one-line statement that uses the ternary operator.

const city = 'London';

if(city === 'London'){
    console.log('You live in London!');
} else{
    console.log('You do not live in London!');
}

//Solution goes here

city === 'London' ? console.log('You live in London!') : console.log('You do not live in London!');
