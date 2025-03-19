let arr1 = [1, 2, 3];

arr1.sayHello = () => {
  console.log("Hello, I am arr");
};
let arr2 = [1, 2, 3];

arr2.sayHello = () => {
  console.log("Hello, I am arr");
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Factory Function
// function PersonMaker(name, age) {
//   const person = {
//     name : name,
//     age : age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }
// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("Eve", 25);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Constructors - doesn't return anything and start with capital
// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function() {
//   console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("Adam", 34);
// let p2 = new Person("Eve", 24);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Classes in JS
class Person {
  constructor(name, age) {
    console.log("Person class constructor");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

let p1 = new Person("Anjali", 20);
let p2 = new Person("Anamika", 18);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inheritance
class Student extends Person {
  constructor(name, age, marks) {
    console.log("Student class constructor");
    super(name, age); //Parent class constructor is being called
    this.marks = marks;
  }
  greet() {
    return "hello";
  }
}

let s1 = new Student("Adam", 25, 95);

class Teacher extends Person{
  constructor(name, age, subject) {
    console.log("Teacher class constructor");
    super(name, age); //Parent class constructor is being called
    this.subject = subject;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Mammal{  // Parent class / Base class 
  constructor(name) {
    this.name = name;
    this.type = "Warm-Blooded";
  }
  eat(){
    console.log("I am eating");
  }
}

class Dog extends Mammal {  // Child class
  constructor(name){
    super(name);
  }
  bark() {
    console.log("Woofff....");
  }
  eat(){
    console.log("Dog is eating");
  }
}

class Cat extends Mammal {
  constructor(name){
    super(name);
  }
  bark() {
    console.log("Meaoooooo....");
  }
}

