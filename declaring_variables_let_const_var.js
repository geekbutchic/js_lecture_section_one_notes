//============= Declaring Variables Using LET CONST VAR  =================

//Declaring Variables let and const and var
//let allows variables to be changed

//In JavaScript, the let keyword is used to declare block-scoped variables, which means their scope is limited to the block in which they are defined.

let age = 30; //block-scoped variables
console.log(age); // 30
age = 31;
console.log(age); // now 31

let count = 5; // 5
count = 10; // Variable 'count' is mutated here by changing its value from 5 to 10.
console.log(count); // now 10

//Mutate variable

const birthYear = 1991;
// birthYear = 1990; // will throw TypeErr

//If you are getting a TypeError when using const, it typically means that you are attempting to reassign a value to a variable declared with the const keyword. Once a variable is declared with const, its value cannot be changed or reassigned. The const keyword creates a read-only reference to a value, making it immutable.

//Cannot create empty const variables
//const job; // missing initializer

//If you attempt to declare a const variable without providing an initializer, you will encounter an error known as "missing initializer in const declaration." This error occurs because a constant variable must be initialized with a value, and the const keyword enforces that the variable's value remains constant throughout its lifetime.

//It is best to use const by default to avoid mutation.

//When the variable's value needs to be re-assignable: If the value of a variable is expected to change during the execution of your code, you should use let. For example, variables used in loops, counters, or values that depend on user input or dynamic calculations.

//Example:

let counter = 0;
counter = counter + 1; // Reassigning the value of the 'counter' variable
console.log(counter); // 1

//When the variable is defined in a block scope: const variables have block scope just like let, but if you need to redefine the variable within a nested block, you'll need to use let.

//Example:

/*
if (condition) {
    let x = 10;
    // Do something with 'x'
  } else {
    let x = 20; // Different 'x' variable within this block scope
    // Do something else with 'x'
  }
*/

//When working with mutable data structures: If you have an array or an object that you want to modify or update, you should use let to hold the reference to the mutable data.

let myArray = [1, 2, 3];
myArray.push(4); // Modifying the array - 'const' won't allow this
console.log(myArray);

//The use of var
//Works like let

var job = "programmer";
job = "teacher";

//let is blocked scoped vs var which is function scoped

//Does not create variable in proper scope becomes a global object not recommended.
lastName = "Valenzuela";
console.log(lastName);

/*
Lecture : Values and Variables
1. Declare called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
*/

const country = "Unites States of America";
const continent = "North America";
const population = 331900000

console.log(`The ${country} located in ${continent} and has a population of ${population} million `)

