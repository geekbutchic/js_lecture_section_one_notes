// if-else statement, switch statement, conditional ternary operator

//operator produces a value or expression
const age = 15;
age >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water 💦`);

//this whole operator is now an expression that produce a value.
const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(drink); //stored value in a variable

//vs if-else version...
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💦";
}
console.log(drink2);

/* 
Lecture : The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console. `Portugal's population is above average`.  Otherwise, simply log `Portugal's population is below average. Notice how only one word changes between these two sentences.
2. After checking the result, change the population temporarily to 13 and then to 130.  See the different results, and set the population back to original.
*/

const averagePopulation = 33000000;
const usPopulation = 331900000;

const message =
  usPopulation > averagePopulation ? "is above average 📈" : "is below average 📉";

console.log(`The U.S. population ${message}.`);
