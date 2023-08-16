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

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple 
lines`); // press return
