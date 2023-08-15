const now = 2037; // use case for a reoccurring value

const ageJonas = now - 1991;
console.log(ageJonas); // 46

const ageSarah = now - 2018;
console.log(ageSarah); // 19

//How does JS know if it should do the Math first before comparing?
console.log(now - 1991 > now - 2018);

/*
1. Grouping operators () [] {}
2. Unary operators + - ! ~ ++ --
3. Multiplicative operators * / %
4. Additive operators + -
5. Shift operators << >> >>>
6. Relational operators < > <= >= instanceof
7. Equality operators == != === !==
8. Bitwise AND &
9. Bitwise OR |
10. Bitwise XOR ^
11. Logical AND &&
12. Logical OR ||
13. Conditional operator ? :
14. Assignment operators = += -= *= /= %= <<= >>= >>>= &= |= ^=
*/

// Math has higher precedence than comparison
console.log(25 - 10 - 5); // 10 

let x, y;
x = y = 25 - 10 - 5; // left to right operators first 25 - 10 - 5 = 10 then...
// x = y = 10 right to left assignment operators 
console.log(x, y); // both x and y are equal to 10, 10

// Grouping highest precedence just like in Math

console.log(ageJonas); // 46
console.log(ageSarah); // 19
// Calculate average add two values and divide by 2

const averageAge = ageJonas + ageSarah / 2; 
console.log(averageAge); // 55.5 does not make sense

const averageAge2 = (ageJonas + ageSarah) / 2; 
console.log(averageAge2); // 32.5