function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' + (number * i));
    }
}

showMultiplicationTable(7);


// Use a for loop and the code from the previous lessons to generate 10 random numbers 
// between 20 and 200 and output to the console whether each number is odd or even. 
// For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd

function randomInt(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

function isEven(x) {
    return x % 2 === 0;
}

function isOdd(x) {
    return x % 2 !== 0;
}

var number;

for(var i = 1; i <= 10; i++) {
    number = randomInt(20, 200);
    
    if(isEven(number)) {
        console.log(number + " is even");
    }

    if(isOdd(number)) {
        console.log(number + " is odd");
    } 
}

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 0000000000
var string;
for(var i = 1; i <= 10; i++) {
    i = i.toString();

    string = i.substring(i.length - 1);

    console.log(string.repeat(i));    
    
}

// i -= 5 is the same as i = i - 5;
for(var i = 100; i >= 5; i -= 5) {
    console.log(i);
}