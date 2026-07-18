// String

let username = "Shueb";


// Number

let age = 20;

let balance = 1000;


// Boolean

let isTrader = true;


// Array

let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];


// Object

let user = {

    name: "Shueb",
    country: "Kenya",
    level: "Developer"

};


// Display data

document.getElementById("output").innerHTML =

`
Name: ${username} <br>
Age: ${age} <br>
Balance: ${balance} <br>
Trader: ${isTrader} <br>
Skills: ${skills.join(", ")} <br>
Country: ${user.country}
`;


// Console

console.log(username);
console.log(age);
console.log(skills);
console.log(user);