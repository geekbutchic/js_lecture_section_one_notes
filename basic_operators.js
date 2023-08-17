// Basic operators allow us to combine or transform values
const now = 2037; // use case for a reoccurring value

// Math Operators
// - operator
const ageJonas = now - 1991;
console.log(ageJonas); // 46

const ageSarah = now - 2018;
console.log(ageSarah); // 19

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// + operator also concatenation
const firstName = "Sonny";
const lastName = "Valenzuela";

//template strings uses `${}` remember spaces count
console.log(`${firstName} ${lastName}`);

//Assignment Operator =
let x = 10 + 5; // 15
console.log(x);

x += 10; // 25 basically reassigning x which carried 15
console.log(x);

x *= 4; // 25 from previous value no it's * 4 = 100
console.log(x);

x++; // 101 x = x + 1
console.log(x);

x--; // 101 x = x - 1
console.log(x);

// Comparison Operators >, <, >=, <=

console.log(ageJonas > ageSarah); // true Jonas age is 46 he is older than Sarah
console.log(ageSarah >= 18); // true Sarah is 19 >= greater or equal to 18

const isFullAge = ageSarah >= 18;
console.log(isFullAge); // True holds Boolean value

//How does JS know if it should do the Math first?
console.log(now - 1991 > now - 2018);

/* 
Lecture : Basic Operators
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
*/

let totalPopulation = 331900000;
let halfPopulation = totalPopulation / 2;
console.log(`${halfPopulation} million people would reside in each half.`);

/*
2. Increase the population of your country by 1 and log the result to the console.
*/

let populationIncrease = ++halfPopulation; // or halfPopulation + 1;
console.log(populationIncrease);

// The increment (++) and decrement (--) operators can be used both before and after the variable, and they behave slightly differently based on where they are placed. Using them before the variable increments or decrements the value first and then returns the updated value, while using them after the variable returns the original value before updating it. It's a subtle distinction that can be useful in different programming scenarios. If you have any more questions or need further assistance, feel free to ask!

/* 
3. Finland has a population of 6 million.  Does your country have more people than Finland?
*/

let finland = 6000000;
let usa = 331900000;

console.log(finland > usa); // false Finland does not have a greater population than my country.

/*
4. The average population of a country is 33 million people.  Does your country have less people than the average country?
*/

let averageCountry = 33000000;

if (usa < averageCountry) {
  console.log("Yes, the USA has less people than the average country.");
} else {
  console.log(
    "No, the USA does not have less people than the average country."
  );
}

// Think of the condition (usa (less) < (greater) averageCountry) as asking the question: "Is the population of the USA less than the population of an average country?"

// If it helps, you can visualize the < symbol as a little arrow pointing from the smaller value to the larger value. This way, you can remember that the condition is true when the value on the left side of < is actually smaller.

/* 
Based on the variables you created, create a new variable 'description' which contains a string with this format: "Portugal is in Europe, and its 11 million people speak portuguese"
*/

const description = "Portugal is in Europe, and it's 11 million people speak portuguese."

/*
Lecture : Strings and Template literals
1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax.
*/

console.log(`${description}`);

