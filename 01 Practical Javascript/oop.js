//this
// function Person(name) {
    // constructor
    // let _name = name;
    // this.name = name;

    // this.printName = function () {
    //     console.log(this.name);
    // };
    // function printName() {
    //     console.log(this.name);
    // }
    //
    // this.printName = () => {
    //     console.log(this.name);
    // }
    // const printName = () => {
    //     console.log(this.name);
    // }

    // return {
    //     printName
    // }
// }

// let artur = new Person("Artur");
// let benny = new Person("Benny");
//
// artur.printName();
// console.log(artur._name);
// artur.printName = null;
// benny.printName();
// new Person('daniel').printName();

// Prototype

// function Person(name) {
//     this.name = name;
// }
//
// Person.prototype.printName = function () {
//     console.log(this.name);
// };
//
// let artur = new Person("Artur");
// let benny = new Person("Benny");
// artur.printName();
// benny.printName();

// revealing
// let Person = function (name) {
//     let _name = name;
//
//     function printName() {
//         console.log(_name);
//     }
//
//     return {
//         printName: printName
//     }
// };
// let artur = new Person("Artur");
// let benny = new Person("Benny");
// artur.printName();
// benny.printName();

// class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     printName() {
//         console.log(this.name);
//     }
// }
// let artur = new Person("Artur");
// let benny = new Person("Benny");
// artur.printName();
// benny.printName();
// console.log(artur.name);
// console.log(Person.prototype.printName.toString());
// class Child extends Person {
//     constructor(name) {
//         super(name);
//     }
//     printName() {
//         super.printName();
//     }
// }
// let arturJunior = new Child("arturJunior");
// arturJunior.printName();