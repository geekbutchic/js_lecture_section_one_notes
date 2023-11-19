// AND operator only true if both are true
// True when ALL are true

/*
A and B 
A: Sarah has a driver's license
B: Sarah has good vision
*/

/* 
A or B
True when one is true
*/

/*
Not A, Not B
Inverts true/false value
*/

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log(`Sarah is able to drive 🏎️`);
} else {
  console.log(`Someone else should drive!`);
}

const isTired = true;
console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive 🏎️`);
} else {
  console.log(`Someone else should drive...`);
}

/*
Lecture : Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way.
2. Let's say Sarah is looking for a new country to live in.  She wants to live in a country that speaks English, has less than 50 million people and is not an island.
3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria.  Take your time with this, and check part of the solution if necessary.
4. If your is the right country, ,log a string like this.`You should live in Portugal`. If not log `Portugal does not mee your criteria`
5. Probably your country does not meet all the criteria.  So go back and temporarily change some variables in order to make the condition true.
*/

// Problem 1
const myNumber = 331.9 * 1000000; // 1 million
console.log(myNumber);

const speaksEnglish = true;
const notIsland = true;
const countryPopulation = 331900000 /* Obtain the country's population */;
const threshold = 50000000; // 50 million
const isPopulationLessThan50Million = countryPopulation < threshold;

if (speaksEnglish && notIsland && isPopulationLessThan50Million) {
  console.log(`You should move to the Unites States!`);
} else {
  console.log(
    `You should not move to the Unites States, it does not meet your criteria!`
  );
}
