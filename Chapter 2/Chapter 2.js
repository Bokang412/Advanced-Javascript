// let firstname = "Mike";
// firstname = "Jacky";
// console.log(firstname);

// // Adding a value in a sentence
// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// // Introduce symbol same as your string
// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

// // Break a line using escape character
// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

// // Symbol data type with Boolean as output
// let str1 = "5";
// let str2 = 5;
// console.log("These two strings are the same:", str1 == str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

// // Unassigned variables
// let unassigned;
// console.log(unassigned);

// // Unknown value
// let empty = null;
// console.log(empty);

// // Compare if undefined is the same as unknown
// let terribleThingToDo = undefined;
// let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);
// let betterOption = null;
// console.log("Same null:", lastName === betterOption);

// // Check data type using typeOf
// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;
// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// // Converting data types
// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);

// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// // Operators
// // Addition
// let nr1 = 12;
// let nr2 = 14;
// let result1 = nr1 + nr2;
// console.log(result1);

// let str1 = "Hello ";
// let str2 = "addition";
// let result2 = str1 + str2;
// console.log(result2);

// // Practise exercise 2.2
// let name = "Bokang";
// let age = 21;
// let canCodeJavascript = true;
// let message = `Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: ${canCodeJavascript}`;
// console.log(message);

// // Substract
// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// // Multiplecation
// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// // Division
// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

// // Exponentiation
// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

// // Modulus or remainders
// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);
// let nr3 = 8;
// let nr4 = 2;
// let result2 = nr3 % nr4;
// console.log(`${nr3} % ${nr4} = ${result2}`);
// let nr5 = 15;
// let nr6 = 4;
// let result3 = nr5 % nr6;
// console.log(`${nr5} % ${nr6} = ${result3}`);

// // Increment and decrement
// let nr1 = 4;
// nr1++;
// console.log(nr1);
// let nr2 = 4;
// nr2--;
// console.log(nr2);

// // Prefix increment
// let nr = 2;
// console.log(++nr);

// // Postfix increment
// let nr = 2;
// console.log(nr++);
// console.log(nr);

// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++);

// // Assignment operators
// // Practice exercise 2.4
// let a = 9;
// let b = 3;
// let c = 6;
// a += b;
// a /= c;
// c %= b;
// console.log(a);
// console.log(b);
// console.log(c);

// // Comparison operators
// // Equal
// let x = 5;
// let y = "5";
// console.log(x == y);
// // Same
// console.log(x === y);
// // Not equal to
// let x = 5;
// let y = "5";
// console.log(x != y);
// // Greater than and smaller than
// let x = 5;
// let y = 6;
// console.log(y > x); 
// console.log(y <= y);

// // Logical operators
// // And &&
// let x = 1;
// let y = 2;
// let z = 3;
// console.log(x < y && y < z);
// console.log(x > y && y < z);
// // Or ||
// console.log(x > y || y < z);
// console.log(x > y || y > z);
// Not !
// let x = false;
// console.log(!x);
// let x = 1;
// let y = 2;
// console.log(!(x < y));

// Practice exercise 2.1
let str1 = 'Laurence'; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof val1);
console.log(typeof val2);
console.log(typeof myNum);

// Practice exercise 2.2
let name = "Bokang";
let age = "21";
let canCode = true;

console.log("Hello, my name is " + name + ", I am " + age + " years old and I can code Javascript:" + canCode);

// // Practice exercise 2.3
// let a = prompt("Value 1?");
// let b = prompt("Value 2?");
// a = Number(a);
// b = Number(b);
// let hypotenuseVal = ((a * a) + (b * b))**0.5;
// console.log(hypotenuseVal);

// Practice exercise 2.4
let a = 4;
let b = 11;
let c = 21;
a = a + b;
a = a / c;
c = c % b;
console.log(a, b, c);




