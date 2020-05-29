//Before starting these practice problems, you will want to connect your index.html file to this JavaScript file.
//To do this, change the script tag so that it links to 'starter-files/07-objects.js' instead of 'script.js'.

//Question 1
//Create a JavaScript object called schoolBus.
//Give it two attributes: color, with a value of 'yellow', and tires, with a value of 4.

schoolBus = {
    color: 'yellow',
    tires: 4
};

//Question 2
//Log the schoolBus to the console.

console.log(schoolBus);

//Question 3
//Log each of the attributes of schoolBus to the console.

console.log(schoolBus.color);
console.log(schoolBus.tires);

//Question 4
//Create another object called Dad.
//It should have two attributes.
//The first attribute should be name, with a value equal to your Dad's first name.
//The second attribute should be child, which is another object.
//This child object should have two attributes: name, equal to your name, and age, equal to your age.

dad = {
    name: 'Jim',
    child: {
        name: 'Nick',
        age: 24
    }
};

//Question 5
//Log the name attribute from your dad object to the console.

console.log(dad.name);

//Question 6
//Log the child's age to the console.
//HINT: You will need to use multiple dot operators.

console.log(dad.child.age);
