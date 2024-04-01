// // While loops
// let i = 0;
// while (i <= 10) {
//  console.log(i);
//  i++;
// }


// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//  fibonacciArray.push(nr1);
//  temp = nr1 + nr2;
//  nr1 = nr2;
//  nr2 = temp; 
// }
// console.log(fibonacciArray);

// // Practice exercise 5.1
// let numMax = 5;
// let randomNum = Math.floor(Math.random() * ++numMax);
// console.log(randomNum);

// let guess = false;
// while (!guess) {
//     let answer = parseInt(prompt("Pick a number from 1 to 5"));
//     if (answer == randomNum) {
//         alert("Correct");
//         guess = true
//     } else if (answer < randomNum) {
//         alert("Incorrect, too low");

//     } else {
//         alert("Incorrect, too high");
//     }
// };

// // Do while loops
// let number;
// do {
//  number = prompt("Please enter a number between 0 and 100: ");
// } while ((number >= 0 && number < 100));

// // Practice exercise 5.2
// let counter = 0;
// let step = 10;

// do{
//    console.log(counter);
//    counter += step;

// }while(counter <= 100);

// // For loops
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//    }

//    let arr = [];
//    for (let i = 0; i < 100; i++) {
//     arr.push(i);
//    }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 100; i = i + 2) {
//  arr.push(i);
// }
// console.log(arr);

// // Practice exercise 5.3
// let myWork = [];
// for (let i = 1; i <= 10; i++) {
//     let status = i % 2 === 0 ? false : true;
//     let lesson = {
//         name: `Lesson ${i}`,
//         status: status
//     };
//     myWork.push(lesson);
// }
// console.log(myWork);

// // Nested loops
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//  arrOfArrays.push([]);
//  for (let j = 0; j < 7; j++) {
//  arrOfArrays[i].push(j);
//  }
// }
// console.log(arrOfArrays);
// console.table(arrOfArrays);

// // Practice exercise 5.4
// let myTable = [];
// let numOfRows = 3;
// let numOfColumns = 4;

// let counter = 0;
// for (let i = 0; i < numOfRows; i++) {
//     let tempTable = [];
//     for (let x = 0; x < numOfColumns; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable)
// }
// console.table(myTable);

// // Loops and arrays
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  console.log(names[i]);
// }

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//  names[i] = "hello " + names[i];
// }
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
// for (let i = 0; i < names.length; i ++){ 
//  if(names[i].startsWith("M")){
//  delete names[i];
//  continue;
//  }
//  names[i] = "hello " + names[i]; 
// } 
// console.log(names);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"]; 
// for (let i = 0; i < names.length; i++){ 
//  names.push("...")
// }
// console.log(names);

// // for of loop
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names){
//  console.log(name);
// }

// // Practice exercise 5.5
// let gridArray = [];
// let cells = 64;
// let counter = 0;
// let row;

// // Practice exercise 5.6
// let array = [];
// for(let i = 0; i < 10;i++){
//    array.push(i + 1); 
// }
// console.log(array);

// for(let x = 0; x < array.length; x++){
//     console.log(array[x]);

// }
// for(let y of array){
//     console.log(y)
// }

// for (let i = 0; i < cells + 1; i++) {
//     if(counter % 8 == 0){
//         if (row != undefined) {        
//             gridArray.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let temp = counter;
//     row.push(temp);
// }
// console.table(gridArray);

// // Loops and objects
// // for in loop
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//    };
//    for (let prop in car){
//     console.log(car[prop]);
//    }

//    for (let prop in car){
//     console.log(prop);
//    }

// // Practice exercise 5.7
// let object = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// for (let num in object){
//     console.log(num ,object[num]);
// }

// let array = ["a", "b", "c"];
// for (let w = 0; w < array.length; w++) {
//     console.log(w, array[w]);
// }
 
// for (el in array) {
//     console.log(el, array[el]);
// }

// // Looping over objects by converting to an array
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//    };
//    let arrKeys = Object.keys(car);
// console.log(arrKeys);

// for(let key of Object.keys(car)) {
//     console.log(key);
//    }

//    let arrKeys = Object.keys(car);
//    for(let i = 0; i < arrKeys.length; i++) {
//     console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
//    }

// // break and continue
// let cars = [
//     {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     },
//     {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//     },
//     {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
//    ];
// console.log(cars[1].model)

// // break
//    for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//     break;
//     }
//    }

// for (let i = 0; i < cars.length; i++) {
//  if (cars[i].year >= 2020) {
//  if (cars[i].color === "black") {
//  console.log("I have found my new car:", cars[i]);
//  break;
//  }
//  }
// }

// // continue
// for (let car of cars) {
//     if (car.color !== "black") {
//         continue;
//     }
//     if (car.year >= 2020) {
//         console.log("we could get this one:", car);
//     }
// }

// let i = 1;
// while (i < 50) {
//     i++;
//     if ((i - 1) % 2 === 0) {
//         continue;
//     }
//     console.log(i - 1);
// }

// for (let i = 1; i < 50; i = i + 2) {
//     console.log(i);
// }

// // Practice exercise 5.8
// let output = "";
// let skipThis = 7;
// for (let i = 0; i < 10; i++) {
//   if (i === skipThis) {
//     continue;
//   }
//   output += i;
// }
 
// console.log(output); 

// // break, continue, and nested loops
// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//     let matches = 0;
//     for (let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith("M")) {
//             matches++;
//         } else {
//             continue;
//         }
//         if (matches === 2) {
//             console.log("Found a group with two names starting with an M:");
//             console.log(groups[i]);
//             break;
//         }
//     }
// }

// for (let group of groups) {
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break;
//         }
//     }
// }

// // break and continue and labeled blocks
// outer:
// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break outer;
//         }
//     }
// }



















































































































































