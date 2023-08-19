//Falsy Values

/*
In JavaScript, a value is considered "falsy" if it evaluates to false when used in a Boolean context. In other words, falsy values are values that are treated as "not true" when converted to a Boolean value. All other values are considered "truthy."
*/

/* 
* false: The literal false is a falsy value.

* null: The value null represents the intentional absence of any object value and is considered falsy.

* undefined: If a variable is declared but has not been assigned a value, it holds the value undefined, which is considered falsy.

* 0: The number 0 (zero) is considered falsy.

* NaN: The value NaN (Not-a-Number) is considered falsy.

* '' (Empty string): An empty string with no characters is considered falsy.
*/

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Sonny")); //true
console.log(Boolean({})); //true

/*
Falsy values represent situations where the absence of a value or the presence of an empty or invalid value is relevant.
*/

/*
In programming and software development, "implicit" often refers to actions, conversions, or behavior that is automatically carried out by the programming language or system without requiring explicit instructions from the programmer. This can include type conversions, default behaviors, and assumptions made by the language or framework based on context.
*/

const money = 100;

//JS will try coerce condition into a boolean
if (money) {
  console.log(`Don't spend it all 🤑`);
} else {
  console.log(`You should get a job!`);
}

//In JavaScript, the variable height in your code is considered undefined because it has been declared but not assigned a value.

let height = 0;
if (height) {
  console.log(`Yay! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
