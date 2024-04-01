// // Arrays
// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];
// arr3 = new Array(10);
// arr4 = [10];
// console.log(arr2);
// console.log(arr1);

// // Determine data type
// let arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// // Accessing element
// cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);

// // Overwriting elements
// cars[0] = "Tesla";
// console.log(cars[0]);
// console.log(cars);

// // Built-in length property
// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers.length);
// console.log("numbers", numbers);

// // Practice exercise 3.1
// shoppingList = ["Milk", "Bread", "Apples"];
// console.log(shoppingList.length);
// shoppingList[1] = "Bananas";
// console.log(shoppingList);

// // Adding and replacing elements
// favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

// // Insert at index 2, items to delete after the insert
// arrOfShapes.splice(2, 1, "square", "trapezoid");
// console.log(arrOfShapes);

// // Joining arrays
// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);

// // Deleting elements
// let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr8);
// // Remove last item
// console.log(arr8.pop());
// console.log(arr8);
// // Remove first item
// console.log(arr8.shift());
// console.log(arr8);
// // Remove from index, number of deletes after 
// console.log(arr8.splice(1, 3));

// // Finding elements
// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);

// arr8 = [ 2, 6, 7, 8 ];
// let findIndex = arr8.indexOf(6);
// let findIndex2 = arr8.indexOf(10);
// console.log(findIndex, findIndex2);

// let animals = ["dog", "horse", "cat", "platypus", "dog"];
// let lastDog = animals.lastIndexOf("dog");

// // Sorting 
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names.sort());

// let ages = [18, 72, 33, 56, 40];
// console.log(ages.sort());

// // Reverse
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names.reverse());

// // Practice exercise 3.2
// let shoppingList = ["Milk", "Bread", "Apples"];
// shoppingList.splice(1, 1, "Bananas", "Eggs");
// console.log(shoppingList.pop());
// console.log(shoppingList.sort());
// console.log(shoppingList.indexOf("Milk"));
// shoppingList.splice(1, 0, "Carrots", "Lettuce");
// let shoppingList2 = ["Juice", "Pop"];
// let shoppingList3 = shoppingList.concat(shoppingList2);
// let shoppingList4 = shoppingList3.concat(shoppingList2);
// console.log(shoppingList4);
// console.log(shoppingList4.lastIndexOf("Pop"));

// // Multidimensional arrays
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let value1 = arrOfArrays[0][1];
// console.log(value1);
// arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// let middleValue = arrOfArraysOfArrays[1][1][1];
// console.log(middleValue);

// // Practice exercise 3.3
// let array1 = [1, 2, 3];
// let arrayOfarrays = [array1, array1, array1];
// let output = arrayOfarrays[1][1];
// console.log(output);

// // Objects
// let arr = [0, 1, 2];
// console.log(typeof arr);

// let dog = { dogName: "JavaScript", 
//  weight: 2.4, 
//  color: "brown", 
//  breed: "chihuahua", 
//  age: 3, 
//  burglarBiter: true
//  };
// console.log(dog.color);

// // Updating object
// dog["color"] = "blue";
// dog.weight = 2.3;
// console.log(dog);

// // Objects in objects
// let company = { companyName: "Healthy Candy",
//  activity: "food manufacturing",
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
//  };
//  company.address.zipcode = "33117";
//  company["address"]["number"] = "100";

// // Arrays in objects
// company = { companyName: "Healthy Candy",
//  activities: ["food manufacturing", 
// "improving kids' health", "manufacturing toys"],
//  address: {
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
//  city: "Miami",
//  state: "Florida"
//  },
//  yearOfEstablishment: 2021
//  };
//  let activity = company.activities[1];
// console.log(activity);

// // Objects in arrays
// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }];
//     let streetName = addresses[0].street;
// console.log(streetName);

// // Objects in arrays in objects
// company = { companyName: "Healthy Candy",
//  activities: [ "food manufacturing", 
// "improving kids' health", 
// "manufacturing toys"],
//  address: [{
//  street: "2nd street",
//  number: "123",
//  zipcode: "33116",
// city: "Miami",
//  state: "Florida"
//  },
//  {
//  street: "1st West avenue",
//  number: "5",
//  zipcode: "75001",
// city: "Addison",
// state: "Texas"
//  }],
//  yearOfEstablishment: 2021
//  };
//  let streetName = company.address[0].street;

// Practice 3.4
const myCar = {
    make: "Toyota",
    model: "Tazz",
    tires: 4,
    doors: 4,
    color: "green",
    forSale: false
};

let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);

// Practice exercise 3.5
const people = {friends:[]};
const friend1 = {first: "Hadiyo", last: "White", id: 1};
const friend2 = {first: "Sandile", last: "Brown", id: 2};
const friend3 = {first: "Keletso", last: "Green", id: 3};
people.friends.push(friend1, friend2, friend3);
console.log(people);





















