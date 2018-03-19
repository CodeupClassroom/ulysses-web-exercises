"use strict";

// 1. Input
// 2. Process the input
// 3. Output

// Input
var name = prompt("What's your name?"); // If no input is given, it's an empty string

var age = prompt("What's your age?"); // If the user clicks cancel the value returned is null

console.log(Number(age) + 10);
// console.log(parseInt(age) + 10);
// console.log(parseFloat(age) + 10);

// Process
name = name.toUpperCase();

var answer = confirm("Do you want to convert your name to uppercase?"); // Always returns a boolean

alert(answer);

// Output
alert("Your name is " + name);
