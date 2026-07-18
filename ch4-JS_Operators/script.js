// Arithmetic Operators

let a = 10;
let b = 5;


let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;


console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(remainder);


// Assignment Operators

let score = 100;

score += 50; // score = score + 50

console.log(score);


// Comparison Operators

let age = 20;

console.log(age > 18);
console.log(age < 18);
console.log(age == 20);
console.log(age === 20);


// Logical Operators

let hasMoney = true;
let hasAccount = true;


console.log(hasMoney && hasAccount);

console.log(hasMoney || false);

console.log(!hasMoney);


// Display result

document.getElementById("result").innerHTML =

`
Addition: ${addition}<br>
Subtraction: ${subtraction}<br>
Multiplication: ${multiplication}<br>
Division: ${division}<br>
Remainder: ${remainder}
`;