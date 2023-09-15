// Switch statement

const day = "saturday";

// switch (key) / case "value"
switch (day) {
  case "monday": // day === 'monday'; strict comparison
    console.log(`Plan course structure!`);
    console.log(`Go to coding meetup.`);
    break; // need break statement to tell it to stop
  case "tuesday":
    console.log(`Prepare theory videos.`);
    break;
  case "wednesday":
  case "thursday": // can use two case statements
    console.log(`Write code examples.`);
    break;
  case "friday":
    console.log(`Record videos.`); 
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend 🎉`);
    break;
  default:
    console.log(`Not a valid day!`);
}

//The switch statement in JavaScript is designed for comparing equality (strict equality) between a single value and multiple possible cases. It's not typically used for more complex comparison operations involving comparison operators like <, >, <=, >=, etc.

//Challenge write switch statement with if else
// if (day === "monday") {
//   console.log(`Plan course structure!`);
//   console.log(`Go to coding meetup.`);
// } else if (day === "tuesday") {
//   console.log(`Prepare theory videos.`);
// } else if (day === "wednesday" || day === "thursday") {
//   console.log(`Write code examples.`);
// } else if (day === "friday") {
//   console.log(`Record videos.`);
// } else if (day === "saturday" || day === "sunday") {
//   console.log(`Enjoy the weekend 🎉`);
// } else {
//   console.log(`Not a valid day `);
// }

//Lecture : The switch statement
/* 
1. Use a switch statement to log the following string for the given 'language': chinese or mandarin : 'Most number of native speakers'.
spanish : `2nd place in number of native speakers!'
english: `3rd place`
hindi: `4th place`
arabic: `5th most spoken language`
For all other simply log `Great language too!`
*/

const language = "italian";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`Most number of native speakers.`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speakers.`);
    break;
  case "english":
    console.log(`3rd place in number of native speakers.`);
    break;
  case "hindi":
    console.log(`4th place in number of native speakers.`);
    break;
  case "arabic":
    console.log(`5th place in number of native speakers.`);
    break;
  default:
    console.log(`Great language too.`);
    break;
}

//However, it's still a good practice to include a break statement after the code block of each case, including the default case, to make the code more explicit and to prevent any unexpected behavior if you add more cases in the future. While it's not strictly required after the default case, it's a good habit to consistently use break statements to avoid any potential confusion.
