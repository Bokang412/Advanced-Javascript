// // if and if else statements
// let rain = true;
// if(!rain){
//  console.log("** Taking my umbrella when I need to go outside **");
// } else {
//  console.log("** I can leave my umbrella at home **");
// }

let age = 20;
if(age < 18) {
    console.log("We're very sorry, but you can't get in under 18");
   } else {
    console.log("Welcome!");
   }

// Practice exercise 4.1
// let Tuesday = !true;
// if(Tuesday){
//  console.log("** Let's have some fun **");
// }
// if(!Tuesday){
//     console.log("**Let's get back to work");
// }

// let Tuesday = !true;
// if(Tuesday){
//  console.log("** Let's have some fun **");
// } else {
//     console.log("**Let's get back to work");
// }

// // Else if statements
// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//  cost = 0;
//  message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//  cost = 5;
//  message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//  cost = 10;
//  message ="A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message ="A ticket is 7 dollars.";
//    }
//    console.log(message);
//    console.log("Your Total cost "+cost);

//    if(age < 3){
//     console.log("Access is free under three.");
//    } else if(age < 12) {
//     console.log("With the child discount, the fee is 5 dollars");
//    } else if(age < 65) {
//     console.log("A regular ticket costs 10 dollars.");
//    } else if(age >= 65) {
//     console.log("A ticket is 7 dollars.");
//    }

// // Practice exercise 4.2
// let userAge = prompt("How old are you?");
// userAge = Number(userAge);
// let message;
// if (userAge >= 21) {
//     console.log("Confirm entry to a venue and the ability to purchase alcohol");
// } else if (userAge >=19) {
//     console.log("Confirm entry to the venue but deny the purchase of alcohol");
// } else {
//     console.log("Deny entry");
// }
// console.log(message);

// // Conditional ternary operators
// let access = age < 18 ? "denied" : "allowed";
// age < 18 ? console.log("denied") : console.log("allowed");

// // Switch statements
// let activity ="Dinner";
// let message;
// if(activity === "Get up") {
//     console.log("It is 6:30AM");
//    } else if(activity === "Breakfast") {
//     console.log("It is 7:00AM");
//    } else if(activity === "Drive to work") {
//     console.log("It is 8:00AM");
//    } else if(activity === "Lunch") {
//     console.log("It is 12.00PM");
//    } else if(activity === "Drive home") {
//     console.log("It is 5:00PM");
//    } else if(activity === "Dinner") {
//     console.log("It is 6:30PM");
//    }

// let activity = "Dinner";
// let message
// switch (activity) {
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
// }

// // The default case
// let activity = "Read";
// let message
// switch (activity) {
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
//     default:
//         console.log("Do your thing");
//         break;
// }

// // Combining cases
// let grade = "A";
// let message;
// switch(grade){
//     case "F":
//     case "D":
//     console.log("You've failed!");
//     break;
//     case "C":
//     case "B":
//     console.log("You've passed!");
//     break;
//     case "A":
//     console.log("Nice!");
//     break;
//     default:
//     console.log("I don't know this grade.");
//    }
   
   // let grade = "E";
   // let message;
   // if(grade === "F" || grade === "D") {
   //  console.log("You've failed!");
   // } else if(grade === "C" || grade === "B") {
   //  console.log("You've passed!");
   // } else if(grade === "A") {
   //  console.log("Nice!");
   // } else {
   //  console.log("I don't know this grade.");
   // }

// // Practice exercise 4.3
// const id = true;
// const message = (id) ? "Allowed In" : "Denied Entry";
// console.log(message);

// // Practice exercise 4.4
// const randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//     case 0:
//         answer = "It will work out";
//         break;
//     case 1:
//         answer = "Maybe, maybe not";
//         break;
//     case 2:
//         answer = "Probably not";
//         break;
//     case 3:
//         answer = "Highly likely";
//         break;
//     default:
//         answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);

// // Practice exercise 4.5
// let prize = prompt("Pick a number 0-10");
// prize = Number(prize);
// let output = "My Selection: ";
// switch (prize){
//     case 0: 
//         output += "Gold ";
//     case 1:
//         output += "Coin ";
//         break;
//     case 2:
//         output += "Big ";
//     case 3:
//         output += "Box of ";
//     case 4:
//         output += "Silver ";
//     case 5:
//         output += "Bricks ";
//         break;
//     default:
//         output += "Sorry Try Again";
// }
// console.log(output);











































































































