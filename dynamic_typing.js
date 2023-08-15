//================ Dynamic Typing ===============
//JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

//Without let -> assigns new value
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // String

//Undefined Variable
let year;
console.log(year); // undefined
console.log(typeof year);// undefined

year = 1991;
console.log(typeof year, year); // typeof num, 1991

//Null Variable null
console.log(typeof null);// object -> JS bug

/*
However, null is not actually an object in JavaScript. It is a primitive value with a special meaning, representing the intentional absence of any object value. In other words, it is used to indicate that a variable does not currently reference any object in memory.
*/

/*
To perform an accurate check for null, you can use a strict equality comparison (===) like this:
*/

let myVariable = null;
console.log(myVariable === null); // Output: true

/*
By using strict equality (===), you can differentiate between null and actual objects, as the comparison will only return true when the value and type match exactly.
*/