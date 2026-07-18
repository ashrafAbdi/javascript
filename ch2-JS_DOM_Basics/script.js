// Selecting elements

const title = document.getElementById("title");
const text = document.getElementById("text");
const button = document.getElementById("btn");
const box = document.getElementById("box");


// Changing text

button.addEventListener("click", function(){

    text.innerHTML = "DOM is controlling this text!";

    title.style.color = "blue";

    box.style.backgroundColor = "black";
    box.style.color = "white";

});


// Console test

console.log(title);
console.log(text);