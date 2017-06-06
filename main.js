// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a, b) {
  // Your answer here
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

console.log("1a.");
console.log(max(7, 4));
console.log();

//***********************************/
//**if i wouldn't like to use 'if' **/
//***********************************/

function max2(a, b) {
  var result = a >= b ? a : b;
  return result;
}

console.log("1b.");
console.log(max2(7, 12));
console.log();

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c) {
  // Your answer here
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log("2.");
console.log(maxOfThree(70, 12, 2));
console.log();

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i <= vowels.length; i++) {
    if (char != vowels[i]) {
      continue;
    }
    return true;
  }
  return false;
}

console.log("3.");
console.log(isVowel("a"));
console.log();

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(num1, num2) {
  var addNums = num1 + num2;
  return addNums;
}

console.log("4.");
console.log(sum(4, 6));
console.log();

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(num1, num2, num3) {
  var addedNums = num1 + num2 + num3;
  var avgNum = addedNums / 3;
  return avgNum;
}

console.log("5.");
console.log(avg(4, 6, 12));
console.log();

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
var animalList = ["Elephant", "Dog", "Cat", "Bird"];
var fruitList = ["Apple", "Grapes", "PineApple", "Banana", "Cherry"];

function getLength(listLength) {
  return listLength;
}

console.log("6.");
console.log(getLength(animalList));
console.log(getLength(fruitList));
console.log();

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(a, b) {
  var result = a <= b ? true : false;
  return result;
}

console.log("7.");
console.log(greaterThan(3, 12));
console.log();

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name) {
  var greeting = "Hello, " + name + "!";
  return greeting;
}

console.log("8.");
console.log(greet("Ian"));
console.log();

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(text1, text2, text3, text4, text5, text6, text7) {
  var kindlib =
    text1 +
    " was very hungry so he went to " +
    text2 +
    " and ate" +
    text3 +
    ", and few mins later he watched a tutorial of " +
    text4 +
    " instead of " +
    text5 +
    " -_____- because deep inside of his mind he wants to learn " +
    text4 +
    " ASAP. Few mins later " +
    text6 +
    " and " +
    text7 +
    " came up to him and asked " +
    text1 +
    " that why he watched " +
    text4 +
    " instead of " +
    text5 +
    ". So " +
    text1 +
    " pretended, like he was confused, and he told " +
    text6 +
    " and " +
    text7 +
    " that it all happend because he was just confused word " +
    text4 +
    " and " +
    text5 +
    " :*)";
  return kindlib;
}

console.log("9.");
console.log(
  madlib(
    "Ian",
    "'Hot Diggity Dog'",
    " 'Nashville' hot Dog",
    "Java",
    "JavaScript",
    "John",
    "Tanner"
  )
);
