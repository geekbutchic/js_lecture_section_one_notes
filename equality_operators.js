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

//Lecture:  Equality Operators : == vs ===

/*
1. Declare a variable 'numNeighbors'
 based on a prompt input like this: prompt (`How many neighbor countries does your country have?')
 
 2. If there is only 1 neighbor country, log to the console.(`Only 1 border!`) use loose equality == for now.

 3. Use an else-if block to log `1 More than 1 border` in case 'numNeighbors' is greater than 1`.
 
 4. Use an else block to log `No Borders` (this block will be executed when 'numNeighbors' is 0 or any other value).

 5. Test the code with different values of 'numNeighbor', including 1 and 0.

 6. Change == to ===, and test the code again, with the same values of 'numNeighbors'. Notice what happens when there is exactly 1 border! Why is this happening?

 7. Finally, convert 'numNeighbors' to a number, and watch what happens now when you input 1.

 8. Reflect on why we should use the === operator and type conversion in this situation.
 
 */

