// // Classes and objects
// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,
//     "kg.");

// //   Constructors
//  class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }
//    let p = new Person("Maaike", "van Putten");
//    console.log("Hi", p.firstname);

// // Method
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     console.log("Hi there! I'm", this.firstname);
//     }
//    }
//    let p = new Person("Maaike", "van Putten");
//    p.greet();

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//     }
// }
// let p = new Person();
// let compliment = p.compliment("Harry", "hat");
// console.log(compliment);

// // Properties
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }
//    let p = new Person("Maaike", "van Putten");
//    console.log("Hi", p.firstname);

// class Person {
//     #firstname;
//     #lastname;   
// constructor(firstname, lastname) {
//     if (firstname.startsWith("M")) {
//         this.#firstname = firstname;
//     } else {
//         this.#firstname = "M" + firstname;
//     }
//     this.#lastname = lastname;
// }
// }
// let p = new Person("kay", "Moon");
// console.log(p);

// // Getters and setters
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);
// p.firstname = "Adnane";
// console.log(p.firstname);

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) { 
//         if(firstname.startsWith("M")) {
//         this.#firstname = firstname; 
//         } else {
//         this.#firstname = "M" + firstname; 
//         }
//         }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Karia", "Saga");
// console.log(p.firstname);

// // Inheritance
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//     }
//     move() {
//     console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//     this.currentSpeed += amount;
//     }
//    }
//    let motor = new Vehicle("Black", 3, 250, "gasoline");
//    console.log(motor.color);
//    motor.move();
//    motor.accelerate(50);
//    motor.move();

// // Prototypes
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     console.log("Hi there!");
//     }
//    }
//    Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
//    };
//    Person.prototype.favoriteColor = "green";
//    let p = new Person("Maria", "Saga");
//    console.log(p.favoriteColor);
//    p.introduce();
// p.greet();

// // Practice exercise 7.1
// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("Bokang", "Ngwenya");
// let person2 = new Person("Hadiyo","Letsitsi");

// console.log(`Hello ${person1.firstname}!`);
// console.log(`Hello ${person2.firstname}!`);

// // Practice exercise 7.2
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullName() {
//         return `${this.firstname} ${this.lastname}`

//     }
// }
// let person1 = new Person("Bokang", "Ngwenya");
// let person2 = new Person("Hadiyo", "Letsitsi");

// console.log(person1.fullName());
// console.log(person2.fullName());

// // Practice exercise 7.3
// class Animal {
//     constructor(animal, sound) {
//         this.animal = animal;
//         this.sound = sound;
//     }
//     noise() {
//         console.log("The " + this.animal + " goes " + this.sound )

//     }
// };

// let animal1 = new Animal("Dog", "Bark");
// let animal2 = new Animal("Cat", "Meow");

// Animal.prototype.jump = function () {
//     console.log("The " + this.animal + " is jumping ")
// };

// animal1.noise();
// animal2.noise();
// animal2.jump();
// animal1.jump();













































































































































































