'use strict';

// console.log('Hello from external JS');

// alert('Welcome to my website!');
//
// var userInput = prompt('What is your favorite color?');
//
// alert('Nice! I like ' + userInput + ' as well.');


/**
 * You have rented some movies for your kids: The little mermaid (for 3 days),
 * Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know
 * yet if they're going to like it). If price for a movie per day is $3, how
 * much will you have to pay?
 */

// // spot the bug -- numbers != strings
// // we should use parseInt to transform the user input, we could also use Number
// var littleMermaidDays = prompt('How many days did we rent the little mermaid for?');
// var brotherBearDays = prompt('How many days did we rent the little mermaid for?');
// var herculesDays = prompt('How many days did we rent the little mermaid for?');
//
// // variable re-assignment
// littleMermaidDays = parseInt(littleMermaidDays);
// brotherBearDays = parseInt(brotherBearDays);
// herculesDays = parseInt(herculesDays);
//
// var pricePerDay = 3;
//
// var totalDays = littleMermaidDays + brotherBearDays + herculesDays;
// var totalPrice = totalDays * pricePerDay;
//
// alert('You will pay: ' + totalPrice);

// --------------------------------------------------

// /**
//  * Suppose you're working as a contractor for 3 companies: Google, Amazon and
//  * Facebook, they pay you a different rate per hour. Google pays $400, Amazon
//  * $380, and Facebook $350. How much will you receive in payment for this week?
//  * You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//  */
//
// // rate is always going to be a whole number
// var googleRate = parseInt(prompt('Hourly rate for google?'));
// var amazonRate = parseInt(prompt('Hourly rate for amazon?'));
// var facebookRate = parseInt(prompt('Hourly rate for facebook?'));
//
// // hours could be a decimal number
// var googleHours = parseFloat(prompt('How many hours did you work for google?'));
// var amazonHours = parseFloat(prompt('How many hours did you work for amazon?'));
// var facebookHours = parseFloat(prompt('How many hours did you work for facebook?'));
//
// // optimize my code for reading
// var total = googleRate * googleHours;
// total += amazonRate * amazonHours;
// total += facebookRate * facebookHours;
//
// // var total = (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate);
//
// alert('Weekly total: ' + total);

// --------------------------------------------------

/**
 * A student can be enrolled to a class only if the class is not full and the
 * class schedule does not conflict with her current schedule.
 */

// // Bonus: how could we change this such that "YES", "Yes", "y", "Y" all count as
// // true?
//
// var classIsFull = prompt('Is the class full?') === 'yes';
// var hasScheduleConflicts = prompt('Are there any schedule conflicts?') === 'yes';
//
// // audience: the developer
// console.log('classIsFull: ' + classIsFull);
// console.log('hasScheduleConflicts: ' + hasScheduleConflicts);
//
// var canEnroll = !classIsFull && !hasScheduleConflicts;
// // js -> english: we can enroll if the class is not full and there are no schedule conflicts
//
// // audience: end users
// alert('Able to enroll: ' + canEnroll);

// --------------------------------------------------

/**
 * A product offer can be applied only if people buys more than 2 items, and the
 * offer has not expired. Premium members do not need to buy a specific amount
 * of products.
 */

// input
var itemsBought = parseInt(prompt('How many items were bought?'));
var isOfferValid = prompt('Is the offer valid?') == 'yes';
var isPremiumMember = prompt('Are you a premium member') == 'yes';

// processing
var shouldApplyOffer = (itemsBought > 2 && isOfferValid) || isPremiumMember;

// output
alert('Offer applies: ' + shouldApplyOffer);
