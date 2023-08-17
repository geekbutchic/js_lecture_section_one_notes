//============ DECLARING A NEW VARIABLE =========

let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof value
console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Jonas"); //quotes needed to create a string!!!

/*
Lecture : Data Types
1. Declare a variable called 'isIsland' and set it's value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet.
2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console.
*/

let isIsland = false;
const language = "English";
let population = 331.9;
const country = 'United States of America';

// Use a ternary operator within the template literal
console.log(`The ${country} has a population of ${population} million, is an ${language} speaking country that is${isIsland ? "" : " not"} an island.`);

/*
Lecture : let, const and var
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one!)
2. Think about which variables should be const variables (which values will never change, and which might change?) Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens. 
*/


isIsland = true;
console.log(isIsland); // TypeError: Assignment to constant variable. Cannot change a const variable.  Error...