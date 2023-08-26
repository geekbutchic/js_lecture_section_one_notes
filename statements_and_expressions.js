//In JavaScript, an expression is a piece of code that produces a value.

//An expression can be a combination of variables, constants, operators, and function calls that are evaluated to yield a result.

const sum = 5 + 3; // The expression "5 + 3" produces the value 8
console.log(sum);

//In JavaScript, a statement is a standalone unit of code that performs an action or a series of actions. Unlike expressions, which produce values, statements are executed for their side effects. They can include assignments, loops, conditionals, function declarations, and more.

let age = 30; // produces value 30

if (age >= 18) {
  //
  console.log("You are an adult."); // Conditional statement
}

/* 
let age = 30; - This line is an expression because it involves variable assignment. The expression 30 produces the value 30, and it's assigned to the variable age.

if (age >= 18) { ... } - This line is a statement. It's a conditional statement that evaluates the expression (age >= 18) to decide whether to execute the code block inside the curly braces. (age >= 18) is an expression that produces a boolean value.

console.log("You are an adult."); is a statement. It's a function call that performs the action of logging a message to the console. While it produces a side effect, it doesn't produce a value that can be used in further computations.
*/

//In most cases, expressions are used within statements to provide the data or conditions necessary for the statement to perform its action. Understanding how expressions and statements work together is essential for writing effective and functional JavaScript code.

console.log(`I'm ${age} years old`);
// Example in template literal you can only put an expression not statement.