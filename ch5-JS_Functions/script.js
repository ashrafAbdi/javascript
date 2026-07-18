// Basic Function

function greet(){

    console.log("Hello JavaScript");

}


// Calling function

greet();


// Function with parameter

function welcome(name){

    console.log("Welcome " + name);

}


welcome("Shueb");


// Function with return value

function add(x,y){

    return x + y;

}


let total = add(10,5);

console.log(total);


// Arrow Function

const multiply = (a,b) => {

    return a * b;

};


console.log(multiply(5,4));


// Function used with DOM

function showMessage(){

    document.getElementById("output").innerHTML =
    "Function executed successfully!";

}