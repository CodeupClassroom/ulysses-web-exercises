'use strict';

// 1 + 1; // 2
//
// var a = 1;
// var b = 2;
//
// a + b;
// // 1 + 2; // value substitution
// // 3;
//
//
// // function definition
// function increment(x) {
//     // debugging output
//     console.log('increment was called!');
//     console.log('x: ' + x);
//     return x + 1;
// }
//
// // calling a function --- functionName(...arguments)
// // parameter == placeholder
// // arguments == actual values that are passed
// increment(6);
//
// // console.log(increment(3) + increment(6))
// // console.log((3 + 1) + (6 + 1))
// // console.log(4 + 7)
// // console.log(11)
//
// var six = increment(increment(increment(3)));
// // we can imagine the line above as evaluating like so:
// // var six = increment(increment(4));
// // var six = increment(5);
// // var six = 6;

// console.log(increment(6)); // increment(6) == x + 1 where x is 6
// console.log(x + 1)
// console.log(6 + 1)
// console.log(7)

// console.log(a + b);
// console.log(1 + 2)
// console.log(3)
// ...actual console output


// parseInt("123abc");
// we are calling the parseInt function
// and passing an *argument* of "123abc"
//
// function addTwoNumbersTogether(x, y) {
//     var result = x + y;
//     return result;
// }
//
// var a = 5;
// var b = 6;
//
// console.log(addTwoNumbersTogether(a, b));
// // console.log(addTwoNumbersTogether(5, 6))
// // console.log(11)

// function addTwoNumbersTogether(x, y) {
//   // x: 5
//   // y: 6
//   var result = x + y;
//   return result;
// }
//
// // define your variables before using them
// var x = 5;
// var y = 6;
//
// console.log(addTwoNumbersTogether(x, y));
//
// // console.log(addTwoNumbersTogether(5, 6))
// // console.log(11)

// scope: where you can see a variable
// - local: variables that exist inside of function
// - global: variables that are defined outside of the function
//
// function simpleScopeExampe() {
//   // this variable has local scope
//   // x is only defined inside of this function
//   var x = 42;
//   return x;
// }
//
// simpleScopeExampe();
// console.log(x) // x is undefined is because there is no x


// var y = 10;
//
// function globalScopeExample() {
//   return y * 3;
// }
//
// console.log(globalScopeExample())

// takes inputs
// produces outputs
// actually, those are both optional

// function returnThree() {
//   return 3;
// }
//
// console.log(returnThree()); // 3
//
// function doNothing(x, y , z, a, b, c, d) {
//   //
// }
//
// console.log(doNothing(10, 123, '456', 1)) // no return value























// var x = 300;
// var y = 100;
//
// // functions are kinda of like pages
// // local variables will always take precedence
// function scopeExample() {
//   var x = 1;
//   var y = 2;
//   console.log('x: ' + x + ' y: ' + y); // x: 1 y: 2
//   return x + y;
// }
//
// console.log('x: ' + x + ' y: ' + y); // x: 300 y: 100
// var returnValue = scopeExample();
// console.log(returnValue); // 3




// Recap:
// - calling a function (evaluation by substitution)
// - defining a function (input -> processing -> output)
// - scope (local + global)

// anonymous functions
// multiple return statements
// iife