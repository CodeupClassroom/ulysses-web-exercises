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


