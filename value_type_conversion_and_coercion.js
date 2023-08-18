//Lecture : Type Conversion and Coercion

//3 types of conversion string, number, boolean

/*
const inputYear = "1991";
console.log(Number(inputYear)); // 1991
//Convert string to number -> Number()
console.log(typeof inputYear); // string
//The variable is still a string
*/

//Converting to number permanently...
let inputYear = "1991"; // Use let instead of const to allow reassignment
console.log(Number(inputYear)); // 1991

inputYear = Number(inputYear); // Reassign the converted value
console.log(typeof inputYear); // number

//NaN and it's meaning

//NaN stands for "Not-a-Number," and it is a special value in JavaScript that represents a value that is not a valid number. It is often used to indicate that a mathematical operation or conversion resulted in a value that cannot be interpreted as a meaningful number.

//It's important to understand that NaN is a specific value and type in JavaScript. You can check for NaN using the isNaN() function, which returns true if the value is NaN, and false otherwise.

console.log(Number("Sonny")); // NaN
console.log(isNaN(NaN)); // true
console.log(isNaN(123)); // false
console.log(isNaN("hello")); // true

//Converting number to a string
console.log(typeof String(23), typeof 23); //string and number

//Type coercion two values
console.log("I'am " + 23 + " years old!");
// + operator triggers coercion to string

//Examples
console.log("10" - 5); // JavaScript coerces "10" to a number and performs subtraction, resulting in 5
console.log("10" + 5); // JavaScript concatenates "10" (as a string) and 5 (as a number), resulting in "105"

//In JavaScript, the + operator does trigger type coercion, but its behavior depends on the types of operands involved. When both operands are numbers, the + operator performs addition. However, when at least one operand is a string, the + operator performs string concatenation.

console.log("23" / "2"); //Same is true for dividing

let n = "1" + 1; //11
n = n - 1; //11 - 1 = 10
console.log(n); // 10 number

const z = 2 + 3 + 4 + '5'; // + operator converts to a string
console.log(typeof z, z); // string 95

//Lecture: Type Conversion and Coercion
/*
1. Predict the result of these 5 operations without executing them:
2. Execute the operations to check if you were right.
*/

const a = '9' - '5'; // number 4
console.log(typeof a, a);
const b = '19' - '13' + '17'; // string 617
console.log(typeof b, b);
const c = '19' - '13' + 17;
console.log(typeof c, c); // number 23
const d = '123' < 57;
console.log(typeof d, d); // boolean false

//When JavaScript encounters a comparison between a string and a number, it attempts to convert the string into a number so that the comparison can be made. In this case, the string '123' can be successfully converted to the number 123.

const e = 5 + 6 + '4' + 9 - 4 - 2; // number 
console.log(typeof e, e); 

/*
The first operation is addition: 5 + 6 results in 11.
The next operation is concatenation: '11' + '4' results in '114'. Here, the + operator is used for string concatenation because one of the operands ('4') is a string.
Continuing with concatenation: '114' + 9 results in '1149'.
Now we have subtraction: '1149' - 4 attempts to convert the string '1149' into a number, resulting in 1149. The subtraction operation then subtracts 4 from 1149, resulting in 1145.
Finally, 1145 - 2 results in 1143.
*/

