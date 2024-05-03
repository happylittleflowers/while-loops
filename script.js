// Ex. Hello World x 25

// Create a loop that runs 25 times.
// var i = 0; // control variable - controls when loop breaks

// while (i < 25) {
//   //   console.log(i);
//   console.log("hello, world!");
//   i++; // increase i by 1. Known as "incrementor"
// }

// All loops need 3 things:
// 1. Control variable.  e.g. var i = 0
// 2. Loop condition. E.g. i < 25.  Should ALWAYS start true, eventually become false. DO THIS CHECK.
// 3. Increment the control variable, otherwise INFINITE LOOP!

// Ex. 0 to 99
// let i = 0;
// while (i < 99) {
//   console.log(i);
//   i++;
// }

// Ex. 99 to 0
// let i = 99;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// Ex.  User Types STOP
// let userWord = ""; // control variable

// while (userWord != "STOP") {
//   userWord = prompt("Type STOP to break the loop");
// }

// alert("Thanks for typing stop");

// Print all ODD numbers from 50 to 100 using a loop

// let j = 50;
// while (j <= 100) {
//   if (j % 2 == 1) {
//     console.log(j);
//   }

//   j++;
// }

// let m = 51;
// while (m <= 100) {
//   console.log(m);
//   m += 2; // same as m = m + 2
// }

// Ex Print -10 to +10

// let i = -10;
// do {
//   console.log(i);
//   i++; // same as i = i + 1
// } while (i <= 10);

// Ex Type STOP

// let userWord;
// do {
//   userWord = prompt("Type STOP");
// } while (userWord != "STOP");

// Fix the infinite loop
// var num = -1;
// while (num < 0) {
//   num += 3;
// }

// Ex.  Prompter. User selects numbers 4 and 10.
// User's 3rd number must fall between 4 and 10.

// let min = +prompt("Enter MIN value");
// let max = +prompt("Enter MAX value");
// let userNum;

// do {
//   userNum = +prompt(`Enter a value between ${min} and ${max}`);
// } while (userNum < min || userNum > max);
// alert("Thank you!");

// Ex.  Break statement
// let num;
// while (true) {
//   num = +prompt("Enter a value between 1 and 10");
//   if (num >= 1 && num <= 10) {
//     break;
//   }
// }
// alert("Thanks!");

// Ex 25 to 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//   counter--;
//   if (counter == 18 || counter == 7) {
//     continue; // skips the rest of the statements
//   }

//   console.log(counter);
// }

// Ex. Average Calculator
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// while (true) {
//   userNum = +prompt("Enter a value (0 to quit):");

//   if (userNum == 0) {
//     break;
//   }

//   // If code gets here, user has entered a good value
//   sum = sum + userNum;
//   numOfValues++; // tracks how many values user types
// }

// let average = sum / numOfValues;
// average = average.toFixed(1);

// alert(`The average is ${average}`);

// Ex 1
// var x = 0;
// while (x < 800) {
//   console.log("HELLO");
//   x++;
// }

// Ex 2
// var y = 20;
// while (y <= 500) {
//   console.log(y);
//   y += 5;
// }

// Ex 3
// var z = 100;
// while (true) {
//   console.log(z);
//   z -= 2; // same as z = z - 2
//   if (z == 8) {
//     break;
//   }
// }

// Ex 4
// let x = 18;
// let total = 0;

// while (x <= 150) {
//   console.log(`Total: ${total}`);
//   console.log(`x: ${x}`);
//   total += x;
//   x++;
// }

// While 1 to 10
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Ex. BLASTOFF
// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Ex. Factorial  5!
// let start = +prompt("Factorial: "); // need a loop to do: 5*4*3*2*1, then stop
// let result = 1;

// for (let i = start; i >= 1; i--) {
//   // console.log(`i: ${i}`);
//   result = result * i;
//   // console.log(`result: ${result}`);
// }
// console.log(`${start}! = ${result}`);

// Ex. Odd Sum:  E.g. 10:  1 + 3 + 5 + 7 + 9 = 25
// let num = +prompt("Enter number to add odds up to:");
// let total = 0;

// for (let i = 1; i <= num; i += 2) {
//   total += i;
// }

// console.log(total);
// Ex. hello world x 75
//console.log("hello. world");

// create a loop that runs 25 times.
//var i = 0; // control variable controls when loop breaks

//while (i < 25) {
// console.log(i);
//console.log("hello. world");
//i++; // increase i by 1. known as "incrementor"
//}
// All loops need 3 things :
// 1. Control variable e.g var i - 0
// 2. loop conditon e.g i < 25 should ALWAYS start true, eventually become false. DO THIS CHECK
// 3. increment the control variable. otherwise infinite loop.

//Ex. User types STOP
//let userWord = ""; // control variable
///while (userWord != "Stop") {
//userWord = prompt("type Stop to break the loop");
//}

//alert("Thanks for typing stop");

// Ex. 99 to 0
//let i = 99;
//while ((i) => 99) {
//console.log(i);
//i++;
//}
// Ex. 0 to 99
//let i = 0;
//while (i <= 99) {
//console.log(i);
//i++;
//}
//What is a counter? What is an accumulator? What are they used for?
//A counter is a variable that keeps track of how many times a loop runs (or the number of iterations of a loop).
//An accumulator adds up values entered by a user.

//8. What for loop would add the integers from 3 to 10 inclusive?
//var SECRET_NUMBER = 8;
//var userGuess = +prompt("Enter a number between  3 and 10:");
//while (userGuess != SECRET_NUMBER) {
//alert("Try again.");
//userGuess = +prompt("Enter a number between  3 and 10:");
//}
//alert("You won!");
//9. Use a break statement in an infinite loop to prompt the user to enter a single letter. If they don't, keep asking them until they do.
//let userNumber = ""; // control variable
//while (userNumber != "8") {
//userNumber = prompt("Keep entering a single number!!");
//}
//10. Write a loop that logs the numbers 0 to 4 to the console.
//let g = 0;
//while (g <= 4) {
//console.log(g);
//g++;
//}
////11. Write a loop that logs the numbers 5 to 15 to the console.
//let b = 5;
//while (b <= 15) {
//console.log(b);
//b++;
//}
//12. Write a loop that logs the even numbers from 0 to 10 to the console.
//let j = 0;
//while (j <= 10) {
//console.log(j);
//j++;
//}
//13. Write a loop that logs the odd numbers from 5 to 15 to the console.
//let k = 5;
//while (k <= 15) {
//console.log(k);
//k++;
//}
//14. Write a loop that logs the numbers from 10 down to 0 to the console.
//let p = 10;
//while ((p) => 10) {
//console.log(p);
//p++;
//}
//let i = -10;
//do {
//console.log(i);
//i++; // same as i = i + 1
//} while (i <= 10);
//let userWord;
//do {
//userWord = prompt("Type STOP");
//} while (userWord != "STOP");
// Fix the infinite loop
//var num = -1;
//while (num < 0 ) {
//num += 3;
//}
// Ex. prompter. user selects numbers between 4 and 10.
// user's 3rd number must fall between 4 and 10.
//let min = +prompt("Enter MIN value");
//let max = +prompt("Enter MAX value");
//let userNum;
//do {
//userNum = +prompt("Emter a value between ${min} and ${max}");
//} while (userNum < min || userNum > max);
//alert("Thank you!");
// Ex. Breal statement
//let num;
//while (true) {
//num = +prompt("Emter a value between 1 and 10");
//if (num >= 1 && num <= 10) {
//reak;
// }
//}
//alert("Thanks!");
// Ex 25 to 1, skips 18 and 7
//let counter = 25;
//while (counter >= 1 ) {
//if (counter == 18 || counter == 7) {
//continue; // skips the rest of the statements
//}
//console.log(counter);
//counter--;
//}
// Ex. Average calculator
//let numOfValues = 0;
//let sum = 0;
//let userNum;
//while (true) {
//userNum = +prompt("Enter a value (0 to quit): ");
//if (userNum == 0) {
//break;
//}
// If code gets here, user has entered a good value
//sum = sum + userNum;
//console.log(sum);
//numOfValues++; // Tracks how many values user types
//let average = sum / numOfValues;
//average = average.toFixed(1);
//alert("the average is ${average}");
//}
//hello 800 times
//var g = 0; // control variable controls when loop breaks
//while (g < 800) {
//console.log(g);
// console.log("Hello");
//}
//Ex. 2
//var y = 20;
//while (y <= 500) {
//console.log(y);
//y += 5;
//}
// ex. 3
//var z = 100;
//while (true) {
//c//onsole.log(z);
//z -= 2; // same as z = z - 2
//if (z == 8) {
//break;
///}
//}
// Ex. 4
//let x = 18;
//let total = 0;
//while (x <= 150) {
// x++;
// total += x;
//console.log("Total: ${total}");
//console.log("x: ${x}");
//}
// Ex. 5
//let total = 0;
//for (let g = 10; g = 100; g += 5) {
//total = total + g;
//}
//console.log(total)
// while 1 to 10
//var i = 1;
//while (i <= 10) {
//console.log(i);
//i++;
//}
//for (var i = 1; i <= 10; i++) {
//console.log(i);
//}
// ex. blast off
//for (var i = 10; i >= 1; i--) {
//console.log("BLASTOFF!");
//}
//Ex. factorial 5!
//let start = +prompt("factorial: "); // need a loop to do : 5*4*3*2*1, then stop
//let result = 1;
//for (let i = start; i >= 1; i-- ) {
//console.log('i: ${i}');
//result = result * i;
//console.log('result: ${result}');
//}
//console.log('${start}! = S{result}');
// Ex. odd sum: eg. 10: 1 + 3 + 5 + 7 + 9 = 25
//let num = 10;
//let total = 0;
//for (let i = 1; i <= num; i += 2) {
//total += i;
//console.log(total);
//}
// 1. Write a for loop that prints the word Mcdavid 1000 times
//let h = 1;
//while (h <= 1000);
//{
//console.log("McDavid");
//h++;
//}
//for (let g = 1; g <= 1000; g++) {
//console.log("McDavid");
//}
//2. write a for loop that prints the numbers 200 down to -50
//for (let m = 200; m >= -50; m--) {
//console.log(m);
//}
//3. write a for loop that asks the user for a number. Then write a for loop that prints
// that many random single digit numbers, less than. Start a 0 and work at less than.

//let userNumber = +prompt("Enter a number");
//for (let g = 0; g < userNumber; g++) {
//let random = Math.random() * 10;
//random = Math.floor(random);
//console.log("random");
//}
// Excerise 8.
//let userNum = +prompt("Enter a number between 1 and 20");
//{
// let userNumber = 2;
//console.log("Try again");
//let userNum = +prompt("Enter a number between 1 and 20");
//{
//let userGuess = 18;
//console.log("try again");
//let userNum = +prompt("Enter a number between 1 and 20");
//{
// let userNum = 19;
//console.log("You won!");
//}
//}
//}
let dice1;
let dice2;
let total;

for (let k = 0; k < 4; k++) {
  dice1 = Math.round(Math.random() * 3 + 2);
  dice2 = Math.round(Math.random() * 2 + 1);
  total = dice1 + dice2;

  console.log(dice1 + "\t" + dice2 + "\t" + total);
}
