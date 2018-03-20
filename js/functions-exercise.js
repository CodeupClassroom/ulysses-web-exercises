"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
  return "Hello, " + name + "!";
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello('Zach');
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = 'Zach';
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(n) {
	return n === 2;
}

console.log('random: ' + random);
console.log('isTwo(random): ' + isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(percentage, total) {
	var tipAmount = percentage * total;
	return tipAmount;
}

console.log('calculateTip(0.20, 20): ' + calculateTip(0.20, 20));
console.log('calculateTip(0.25, 25.50): ' + calculateTip(0.25, 25.50));
console.log('calculateTip(0.15, 33.42): ' + calculateTip(0.15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// helper function to prompt and get a number back
function promptNumber(question) {
	var userInput = prompt(question);
	return parseFloat(userInput);
}

var amountToTip = calculateTip(
	promptNumber('Tip percentage?'),
	promptNumber('Bill total?')
);

alert('You should tip $' + amountToTip);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountPercent) {
	var discountAmount = originalPrice * discountPercent;
	var priceAfterDiscount = originalPrice - discountAmount;
	return priceAfterDiscount;
}

/**
 * --- Extra Drills ---
 */

// do you understand the vocab?
function identity(arg) {
	return arg;
}

function isValidLogin(username, password) {
	// Strictly speaking, we don't need to have separate variables for all of
	// these but it makes the code easier to read and reason about
	var isPasswordLongEnough = password.length > 5;
	var isUsernameShortEnough = username.length < 20;
	var passwordIncludesUsername = password.indexOf(username) !== -1;
	var usernameHasWhitespace = username !== username.trim();
	var passwordHasWhitespace = password !== password.trim();

	return (
		isPasswordLongEnough &&
		isUsernameShortEnough &&
		! passwordIncludesUsername &&
		! usernameHasWhitespace &&
		! passwordHasWhitespace
	);
}

// see also .includes
function stringContains(haystack, needle) {
	return haystack.indexOf(needle) !== -1;
}

function hasWhitespace(string) {
  return stringContains(string, ' ');
}

function square(n) {
	return n * n;
}

// composition: using functions together
// - not possible if we console.log instead of returning
function isRightTriangle(a, b, c) {
	return square(a) + square(b) === square(c);
}
