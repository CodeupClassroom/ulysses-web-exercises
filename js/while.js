// 1. We're always multiplying the initial number times 2

var number;

number= 2; // initialization
// while (i <= 65536) /* should I continue? */ {
while (number <=  65536 /* continue condition */ ) /* should I continue? */ {
    console.log(number);  // thing(s) to repeat
    // Multiply here
    // number = number * 2;
    number *= 2; /* increment/decrement/accumulator */
}

for (
    number = 2 /* initialization */;
    number <= 65536 /* continue condition */;
    number *= 2 /* increment/decrement/accumulator */
) {
    console.log(number); // thing(s) to repeat
}

number = 2; /*initialization*/
do {
    console.log(number); // thing(s) to repeat
    number *= 2; /* increment/decrement/accumulator */
} while (number <= 65536 /* continue condition */);


var allCones = Math.floor(Math.random() * 50) + 50; /* initialization */
do {
    // thing(s) to repeat
    var conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold <= allCones) { // I have enough cones to sell
        console.log(conesSold + ' cones sold...');
        /* increment/decrement/accumulator */
        allCones -= conesSold;
    } else { // this is the special case
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + allCones + '...');
    }

} while (allCones > 0);
console.log('Yay! I sold them all!');

// for: when you know exactly how many time you'll repeat something
// while or do while: when you don't know how many repetitions
// use do while if you need to repeat something at least once
// use while when you might not repeat even once

for (allCones = Math.floor(Math.random() * 50) + 50; allCones > 0; ) {
    conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold <= allCones) { // I have enough cones to sell
        console.log(conesSold + ' cones sold...');
        /* increment/decrement/accumulator */
        allCones -= conesSold;
    } else { // this is the special case
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + allCones + '...');
    }
}
console.log('Yay! I sold them all!');

















