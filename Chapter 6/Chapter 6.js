// Functions
// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//    }
//    sayHello();

   // let varContainingFunction = function() {
   //  let varInFunction = "I'm in a function.";
   //  console.log("hi there!", varInFunction);
   // };
   // varContainingFunction();

// // Parameters and arguments
// function addTwoNumbers(x, y){
//     console.log(x + y);
//    }
//    addTwoNumbers(3, 5);

// // Default or unsuitable parameters
// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);
// addTwoNumbers(10);
// addTwoNumbers(1,2,3,4);

// // Arrow functions
// function doingStuff(x) {
//     console.log(x);
//    }
//    doingStuff("Great!");

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("Great!");

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// let sayHi = () => console.log("hi");
// sayHi();

// // Spread operator
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//  "powerful"];
// console.log(message);
// console.log(message.join(" "));

// function addTwoNumbers(x, y) {
//     console.log(x + y); 
//    } 
//    let arr = [5, 9];
//    addTwoNumbers(...arr);

//    function addFourNumbers(x, y, z, a) { 
//     console.log(x + y + z + a); 
//    } 
//    let arr = [5, 9];
//    let arr2 = [6, 7];
//    addFourNumbers(...arr, ...arr2);
//    addFourNumbers(5, 9, 6, 7);

// // Rest parameter
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?", "Long time no see.");

// // Returning function values
// let result = addTwoNumbers(4, 5);
// console.log(result);
// function addTwoNumbers(x, y) {
//     return x + y;
//    }

//    let resultsArr = [];
//    for(let i = 0; i < 10; i ++){
//     let result = addTwoNumbers(i, 2*i);
//     resultsArr.push(result);
//    }
//    console.log(resultsArr);

// //Returning with arrow functions
// let addTwoNumbers = (x, y) => x + y;
// let result = addTwoNumbers(12, 15);
// console.log(result);

// let addTwoNumbers = (x, y) => {
//     return x + y;
//    }
// let results = addTwoNumbers(12, 15);
// console.log(results);

// // Local variables in functions
// function testAvailability(x) {
//     console.log("Available here:", x);
//    }
//    testAvailability("Hi!");

//    function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
//    }
//    testAvailability();
//    console.log("Not available here:", y);

//    function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//    }
//    let z = testAvailability();
//    console.log("Outside the function:", z);
//    console.log("Not available here:", y);

// // let versus var variables
// function doingStuff() {
//     if (true) {
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff() {
//     if (true) {
//         let x = "local";
//         console.log(x);
//     }
// }
// doingStuff();

// function doingStuff() { 
//     if (true) { 
//     console.log(x);
//     let x = "local"; 
//     } 
//    }
//    doingStuff();

// Const scope (local)
// function doingStuff() {
//     if (true) {
//         const X = "local";
//     }
//     console.log(X);
//    }
//    doingStuff();

//    function doingStuff() {
//     if (true) {
//         const X = "local";
//         console.log(X);
//     }
//    }
//    doingStuff();

// // Global variables
// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
//  console.log("Access to global vars inside function." , globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// let x = "global";
// function doingStuff() {
//  let x = "local";
//  console.log(x);
// }
// doingStuff();
// console.log(x);

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
//    }
//    confuseReader();
//    console.log("Outside of function:", x);

// // Immediately invoked function expression
// (function () {
//     console.log("IIFE!");
//    })();
//    (()=>{
//     console.log("run right away");
//    })();

// // Recursive functions
// function getRecursive(nr) {
//     console.log(nr);
//     if (nr>0) {getRecursive(--nr);
//    }
// }
//    getRecursive(3)

//    function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//     logRecursive(nr - 1);
//     } else {
//     console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//    }
//    logRecursive(3);

// // Nested functions
// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//     console.log(x + 7);
//     console.log("I can access outer variables:", nr);
// }
// }
// doOuterFunctionStuff(2);

// // Anonymous functions
//    let functionVariable = function () {
//  console.log("Not so secret though.");
// };
// functionVariable();
// //2
// // Function callbacks
// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
//    }
//    doFlexibleStuff(functionVariable);
// //3
//    let anotherFunctionVariable = function() {
//     console.log("Another anonymous function implementation.");
//    }
//    doFlexibleStuff(anotherFunctionVariable);

//    let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
//    };
//    setTimeout(youGotThis, 1000);

// // Practice exercise 6.1
// function addNumbers(num1, num2) {
//    return num1 + num2;
// }
// num1 = 5;
// num2 = 4;
// console.log(addNumbers(num1, num2));
// console.log(addNumbers(10, 10));

// // Practice exercise 6.2
// let description = ["Big", "Small", "fast", "green"]; 

// function myName(){
//     let question = prompt("What is your name?");
//     let random = Math.floor(Math.random()* description.length);
//     console.log(description[random] + " " + question);
// };
// myName();

// // Practice exercise 6.3
// let num1 = 5;
// let num2 = 4;
// let op = "+";

// function calculate(a, b, op) {
//     if (op == "+") {
//         console.log(a + b);
//     } else {
//         console.log(a - b)
//     }

// };
// calculate(num1, num2, op);

// function calculate(a, b, op) {
//     if (op == "-") {
//         console.log(a + b);
//     } else {
//         console.log(a - b)
//     }

// };
// calculate(num1, num2, op);

// // Practice exercise 6.4
// let myArr = [];

// for(i = 0; i < 10; i++){
//     let num1 = i * 5;
//     let num2 = i * i;
//     let solution = calculate(num1,num2, "+");
//     myArr.push(solution);
// };

// function calculate(a, b, op) {
//     if (op == "+") {
//         console.log(a + b);
//     } else {
//         console.log(a - b)
//     }

// };

// // Practice exercise 6.5
// let value = "1000";

// (function(){
//     value = "1069";
//     console.log(value);
// })();

// (function(result){
//     console.log("The number is " + result);
//     console.log(result);
// })("69");

// // Practice exercise 6.6
// function Recursive(num) {
//    console.log(num);
//    if (num === 0) {
//        return 1;

//    } else {
//        return num * Recursive(--num);
//    }

// }
// console.log(Recursive(5));

// // Practice exercise 6.7
// let start = 10;
// function countdown(val){
//     console.log(val);
//     if(val < 1){
//         return;

//     }
//     return countdown(val -1);

// }
// countdown(start);
// function countdown(val) { 
//     console.log(val); 
//     if (val > 0) { 
//         val--; 
//         return countdown(val); 
//     } 
//     return; 
    
// } 
// countdown(start);

// // Practice exercise 6.8
// let myFunction = function(num1){
//    return num1;
// }
// console.log(myFunction(69));

// function myFunc(num){
//    return num;
// }
// console.log(myFunc(9));










































































































































































