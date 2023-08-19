const age = "18";

//Strict equality operator
if (age === 18) {
  console.log(`You can vote strict version!`);
}

//Loose equality operators does type coercion
if (age == 18) {
  console.log(`You can vote loose version!`);
}

//General rule avoid loose equality operator ===
//Need to convert to a number due to coercion to string

const favNumber = Number(prompt(`What's your favorite number?`));
console.log(typeof favNumber, favNumber);

if (favNumber === 23) {
  console.log(`Great choice, my first pick!`);
} else if (favNumber === 9) {
  console.log(`9 is also a great number, my second pick!`);
} else if (favNumber === 7) {
  console.log(`7 is also a great number, my third pick!`);
} else {
  console.log(`Number is not 23, 9, or 7 😣 oops!!!`);
}

//Not equal to 23
if (favNumber !== 23) {
  console.log(`Why not 23???`);
}
