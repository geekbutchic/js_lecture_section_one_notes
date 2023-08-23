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

