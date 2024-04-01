// // Method
// let s = "Hello";
// console.log(
//  s.concat(" there!")
//  .toUpperCase()
//  .replace("THERE", "you")
//  .concat(" You're amazing!")
// );

// // Global methods
// let x = 6;
// console.log(Number.isNaN(x));
// console.log(isNaN(x));

// // decodeUri() and encodeUri()
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// // decodeUriComponent() and encodeUriComponent()
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

// Practice excercise 8.1


// // Making integers with parseInt()
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);
// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

// // Making floats with parseFloat()
// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_version_nr = "2.3.4";
// let float_version_nr = parseFloat(str_version_nr);
// console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// // Executing JavaScript with eval()
// <html>
//  <body>
//  <input onchange="go(this)"></input>
//  <script>
//  function go(e) {
//  eval(e.value);
//  }
//  </script>
//  </body>
// </html>

// document.body.style.backgroundColor = "pink";

// // Array methods
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

// // Filtering an array
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));

// // Replacing part of an array with another part of the array
// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// console.log(arr);

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

// // Mapping the values of an array
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

// // Finding the last occurrence in an array
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("hi"));

// Practice exercise 8.2

// Practice exercise 8.3

// // Combining strings
// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

// // Converting a string to an array
// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// // Converting an array to a string
// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let letters = ["a", "b", "c"];
// let x = letters.join('-');
// console.log(x);

// // Working with index and positions
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("if");
// console.log(index_re);

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_res = poem.search("if");
// console.log(index_res);

// let lastIndex_re = poem.lastIndexOf("re");
// console.log(lastIndex_re);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// // Creating substrings
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// // Replacing parts of the string
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3);

// // Uppercase and lowercase
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
// console.log(first_capital);

// // The start and end of a string
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_start3 = encouragement.toLowerCase().startsWith("you");
// console.log(bool_start3);

// Practice exercise 8.4

// Practice exercise 8.5

// // Checking if something is (not) a number
// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// let str1 = "5";
// console.log(isNaN(str1));

// // Checking if something is finite
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

// // Checking if something is an integer
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

// // Specifying a number of decimal
// let x = 1.23456;
// let newX = x.toFixed(2);
// console.log(newX);

// let x = 1.23456;
// let newX = x.toFixed(3); 
// console.log(x, newX);

// // Specifying precision
// let x = 1.23456;
// let newX = x.toPrecision(2);
// console.log(newX);

// let x = 1.23456;
// let newX = x.toPrecision(4); 
// console.log(newX);

// Finding the highest and lowest number
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// // Square root and raising to the power of
// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

// // Turning decimals into integers
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

// // Exponent and logarithm 
// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

// Practice exercise 8.6

// // Creating dates
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// // Methods to get and set the elements of a date
// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);

// d.setMonth(9);
// console.log(d);

// d.setDate(10);
// console.log(d);

// // Parsing dates
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

// // Converting a date to a string
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());

// // Practice exercise 8.1
// let string = "How's%20it%20going%3F";  //Create two variables
// let string2 = "How's it going?";

// let decode = decodeURIComponent(string);      //Decode  1st string
// let encode = encodeURIComponent(string2);     //Encode  2nd string

// console.log(decode);
// console.log(encode);

// let uri = "http://www.basescripts.com?=Hello World";  //Encode uri link
// encode = encodeURI(uri);
// console.log(encode);

// // Practice exercise 8.2
// let names = ["Bokang", "Hadiyo", "Sandile", "Rishen", "Keletso", "Zandile"];

// let array = names.filter((value, index, array) => {
//     console.log(value, index, array.indexOf(value))
//     return array.indexOf(value) === index;
// });

// console.log(array);

// // Practice exercise 8.3
// let numberArray = [1, 2, 3, 4, 5, 6];

// let myFunction = numberArray.map((numberArray) => {
//     return numberArray * 2
// });
// console.log(myFunction);

// let numberArray2 = numberArray.map((numberArray) => numberArray * 2);

// console.log(numberArray2);

// // Practice exercise 8.4
// let string = "hI, Do yOU lIkE PiZZa?";

// function myFunction(str) {
//     str = str.toLowerCase();
//     let newString = [];
//     let newWords = str.split(" ");
//     newWords.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1)
//         newString.push(temp);

//     });
//     return newString.join(" ");

// };
// console.log(myFunction(string));

// // Practice exercise 8.5
// let string = "I love Javascript";
// string = string.toLowerCase();

// let vowels = ["a","e","i","o","u"];

// vowels.forEach((letter, index)=> {
//     console.log(letter);
//     string = string.replaceAll(letter,index);

// });
// console.log(string);

// // Practice exercise 8.6
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 100) + 1);


// function randomNumber(min, max) {

//     for (let i = 0; i < 100; i++) {
//         let randomNum = Math.floor(Math.random() * (min + max))
//         console.log(randomNum);

//     }
// };

// randomNumber(1, 100)

// // Practice exercise 8.7
// let future = new Date(2024, 4, 3);
// console.log(future);

// let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "Septrmber", "October", "November", "December"];
// let date = future.getDate();
// let year = future.getFullYear();
// let month = future.getMonth();

// let time = "The future date is " + date + (month + 1) + year;
// console.log(time);






























