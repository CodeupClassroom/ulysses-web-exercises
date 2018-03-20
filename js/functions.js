'use strict';

// This morning
// - how to write a function
// - more function drills
// This week:
// - finish functions
// - conditionals
// - loops
// - arrays + objects
// Next week: JS Assessment on the topics above
// - first grading period

// Write a function named decrement that accepts a number
// and returns the number minus 1

// accepts a number, (takes in, is passed)
function decrement(someNumber) {
  return someNumber - 1;
}

// defining a function does _not_ run the code in the function

// check our work, console.log the return value
var theThingThatTheFunctionReturns = decrement(12);
console.log(theThingThatTheFunctionReturns);

// common mistakes:
// - relying on global variables instead of parameters/arguments
// - not returning values
// - console.log inside a function (this is helpful for debugging, but shouldn't be in the finsihed function)

parseInt("123abc");
// we are calling the parseInt function
// and passing an *argument* of "123abc"

// evaluation by substitution
1 + 1; // 2

var a = 1;
var b = 2;

a + b;
// ^ This expression evaluates like so:
// 1 + 2; // value substitution
// 3;

console.log(a + b);
// console.log(1 + 2)
// console.log(3)
// ...actual console output


// function definition
function increment(x) {
    // debugging output
    console.log('increment was called!');
    console.log('x: ' + x);
    return x + 1;
}

// calling a function --- functionName(...arguments)
// - where '...arguments' is zero or more values, separated by commas
// parameter == placeholder
// arguments == actual values that are passed
console.log(increment(6)); // 7
// increment(6) == x + 1 where x is 6
// console.log(x + 1)
// console.log(6 + 1)
// console.log(7)

console.log(increment(3) + increment(6))
// console.log((3 + 1) + (6 + 1))
// console.log(4 + 7)
// console.log(11)

var six = increment(increment(increment(3)));
// we can imagine the line above as evaluating like so:
// var six = increment(increment(4));
// var six = increment(5);
// var six = 6;

// A function with multiple parameters
function addTwoNumbersTogether(x, y) {
    var result = x + y;
    return result;
}

// these might not be number literals, they could come from
// the user, for example
var a = 5;
var b = 6;

// calling a function with multiple arguments
console.log(addTwoNumbersTogether(a, b));
// console.log(addTwoNumbersTogether(5, 6))
// console.log(11)

// Scope example
function addTwoNumbersTogether(x, y) {
  // x: 5
  // y: 6
  var result = x + y;
  return result;
}

// define your variables before using them
var x = 5;
var y = 6;

console.log(addTwoNumbersTogether(x, y));
// console.log(addTwoNumbersTogether(5, 6))
// console.log(11)

// scope: where you can see a variable
// - local: variables that exist inside of function
// - global: variables that are defined outside of the function

function simpleScopeExample() {
  // this variable has local scope
  // x is only defined inside of this function
  var x = 42;
  return x;
}

simpleScopeExample();
console.log(x) // x is undefined is because there is no x here (in the global scope)

var y = 10;
function globalScopeExample() {
  // this is okay becuase y is defined globally
  return y * 3;
}

console.log(globalScopeExample())

// takes inputs
// produces outputs
// actually, those are both optional, i.e. functions can have zero parameters,
// or no return value

function returnThree() {
  return 3;
}

console.log(returnThree()); // 3

function doNothing(x, y , z, a, b, c, d) {
  //
}

console.log(doNothing(10, 123, '456', 1)) // undefined, no return value

var x = 300;
var y = 100;

// functions are kinda of like pages, they have separate variables
// local variables will always take precedence over global ones of the same name
function scopeExample() {
  var x = 1;
  var y = 2;
  console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
  return x + y;
}

console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
var returnValue = scopeExample();
console.log(returnValue); // 3

// Recap:
// - calling a function (evaluation by substitution)
// - defining a function (input -> processing -> output)
// - scope (local + global)
//
// // multiple return statements, or code appearing after a return statement
// // will *not* run
function multipleReturns() {
  return 1;
  console.log('A message') // will not run
}

multipleReturns();

// anonymous functions, function expression
var increment = function(x) {
  return x + 1;
};

console.log(increment(123)) // 124

// iife -- immediately invoked function expression
//
(function(){
  function increment(x) {
    return x + 1;
  }
  var x = 42;
  console.log(increment(x)); // 43
  console.log('define and then call a function');
})();

console.log(x); // reference error, x is undefined

(function() {})();


