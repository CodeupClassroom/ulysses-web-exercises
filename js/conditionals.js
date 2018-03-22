"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function inputNumber(message) {
    var input = prompt(message);
    var number = parseInt(input);
    return number;
    // return parseInt(prompt(message));
}

function isNumeric(value) {
    // type casting
    // return !isNaN(value);
    return typeof value === 'number';
}

function isEvenOrOdd(number) {
    if (number % 2 === 0) {  // consequence
        return number + " is even";
    }
    return number + " is odd";
}

function addOneHundredTo(number) {
    return number + " + 100 = " + (number + 100);
}

function isPositiveOrNegative(number) {
    if (number >= 0) { // consequence
        return number + " is a positive number :)";
    } else {
        return number + " is a negative number :(";
    }
}

function exerciseOne() {
// 1. ask the user if they want to enter a number
    var answer = confirm('Do you want to enter a number');
// 2. If the answer is Cancel go to step 7
    if (answer) {
        // 3. Ask the user for the number
        var number = inputNumber('Enter a number');
        // 3.1. If the user input is not a number show an error message and go to 7
        if (isNumeric(number)) {
            // 4. Show a message telling if the number is even or odd
            document.write(isEvenOrOdd(number) + '<br>');
            alert(isEvenOrOdd(number));
            // 5. Sum 100 to the number and show the result
            alert(addOneHundredTo(number));
            document.write(addOneHundredTo(number) + "<br>");
            // 6. Show a message saying if the number is positive or negative
            alert(isPositiveOrNegative(number));
            document.write(isPositiveOrNegative(number) + '<br>');
        }
    }
// 7. End of program
}

// exerciseOne();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    /*if (color === 'blue') {
        return 'blue is the color of the sky';
    } else if (color === 'red') {
        return 'Strawberries are red';
    } else if (color === 'orange') {
        return 'Orange is orange';
    } else if (color === 'yellow') {
        return 'Bananas are yellow';
    } else if (color === 'green') {
        return 'bananas are not green';
    } else if (color === 'indigo') {
        return 'indigo is the color of ink';
    } else if (color === 'violet') {
        return 'you\'re turning violet Violet';
    } else {
        return "I don't know anything about " + color;
    }*/
    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */
    switch (color) {
        case 'blue':
            return 'blue is the color of the sky';
        case 'red':
            return 'Strawberries are red';
        case 'orange':
            return 'Orange is orange';
        case 'yellow':
            return 'Bananas are yellow';
        case 'green':
            return 'bananas are not green';
        case 'indigo':
            return 'indigo is the color of ink';
        case 'violet':
            return 'you\'re turning violet Violet';
        default:
            return "I don't know anything about " + color;
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function exerciseTwo() {
    console.log(analyzeColor(randomColor));
    alert(analyzeColor(randomColor));
    document.write(analyzeColor(randomColor));
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */
    var color = inputNumber('Enter a number between 0 and 6');
    var message = analyzeColor(colors[color]);
    alert(message);
}

exerciseTwo();



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
