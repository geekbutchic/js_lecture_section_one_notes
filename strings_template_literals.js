const firstName = "Sonny";
const job = "Software Developer";
const birthYear = 1984;
const year = 2023;

const sonny =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(sonny); // concatenation

const temp_sonny = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(temp_sonny); // template_literals -> ES6

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple 
lines`); // press return

/*
const birthYear2 = 1984;

let century;
if (birthYear2 <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);
*/

//The reason you would get undefined in the console log is due to variable scoping within your code. You've declared the variable century multiple times using the let keyword, but in different scopes, which creates separate instances of the variable.

//Inside the if block, you again declare a variable century using let and assign it the value 20. This variable is local to the if block's scope and has no connection to the century variable declared in the global scope.

//Inside the else block, you again declare a variable century using let and assign it the value 21. Similar to the previous case, this variable is local to the else block's scope and is separate from the other century variables.

//After the if-else block, you try to log the value of century to the console. However, at this point, the century variable in the global scope still has not been assigned any value, so its default value is undefined, and that's what gets logged to the console.

const birthYear2 = 1984;

let century;
if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century + (century === 20 ? "th" : "st") + " century");

// template literal
console.log(`${century}${century === 20 ? "th" : "st"} century`);

/* 
Lecture : Taking Decisions : if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the console. 'United States Population is above average'. Otherwise, log a string like 'Unites States Population is 22 million below average'(the 22 is the average of 33 minus the country's population)
*/

let countriesPopulation = 331900000;
// let countriesPopulation = 13000000;
let averagePopulation = 33000000;
let populationDifference = Math.abs(countriesPopulation - averagePopulation);

//I've used Math.abs() to ensure that the population difference is presented as a positive value in the message, regardless of whether it's above or below average. The output will now provide the appropriate messages based on whether the population is above or below average.

if (countriesPopulation > 33000000) {
  console.log(`Unites States of America's population is above average 🇺🇸`);
} else {
  console.log(
    `United States Population is ${populationDifference.toLocaleString(`en-US`)} below average 🤨`
  );
}

//The .toLocaleString() method in JavaScript is used to convert a number into a string representation with locale-specific formatting. This means that the number is converted into a string while taking into account the user's locale, which includes factors like the preferred decimal separator, thousands separator, and grouping of digits based on the locale's conventions.

//The .toLocaleString() method is influenced by the user's locale settings, which can vary based on their country and language preferences. You can also explicitly specify a locale using the optional parameter of the method.

//.toLocalString() example
const number = 1000000;

// Using the user's default locale
const formattedDefault = number.toLocaleString();
console.log("Default Locale:", formattedDefault);

// Using a specific locale (German in this case)
const formattedGerman = number.toLocaleString('de-DE');
console.log("German Locale:", formattedGerman);

// Using a specific locale (French in this case)
const formattedFrench = number.toLocaleString('fr-FR');
console.log("French Locale:", formattedFrench);
