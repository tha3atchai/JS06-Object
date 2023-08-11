console.log("Method and this keyword");


//#################################
//### 1. Intro Method           ###
//#################################


// each record => called property:
// each property => <key>:<value>;

// some record => <key>:<FN>;
// called method == ความสามารถของ Object ;

// const devWebsite = () => {
//     console.log("I'm working");
// };

// const meeting = () => {
//     console.log("I'm meeting");
// };

// const skill = () => {
//     console.log("Coding");
// };

// const programmer = {
//     name: "Pavit",
//     age: 30,
//     dev: devWebsite,
//     meet: meeting,
//     skill,
// };

// // programer.dev // devWebsite;
// // Syntax : <obj>.<method>();
// programmer.dev();
// programmer.meet();
// programmer.skill();
// // เพิ่ม method ให้ programmer 1 อย่าง และลองเรียกใช้งาน;


//#################################
//### 2. Alternative Syntax     ###
//#################################

// const programmer = {
//     name: "John",
//     age: 30,
//     dev: function() {
//         console.log("I'm working");
//     },
//     meet : () => console.log("I'm meeting"),

//     // method shorthand
//     sleep () {
//         console.log("I'm sleeping");
//     },
//     // sleep : () => console.log("I'm sleeping");
// };

// programmer.dev();
// programmer.meet();
// programmer.sleep();

// Mini-lab;
// สร้าง Object ของตัวเอง;
// ระบุคุณสมบัติของตัวเองสัก 2-3 ข้อ;
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax);
// key: namedFunction;
// key: anonymous FN;
// key: arrowFN;
// key: shortHand;

// const playSport = (type) => console.log(`I'm playing ${type}`);

// const me = {
//     name: "sonk",
//     hair: "black",
//     eye: "brown",
//     gender: "male",
//     myEx: ["John", "Wick"],
//     playSport,
//     sleep0: function sleep0 (menu) {
//         console.log(`sleep0 ${menu}`);
//     },// namedFunction;
//     sleep1: function (menu) {
//         console.log(`sleep1 ${menu}`);
//     },// anonymous FN;
//     sleep2: (menu) => {
//         console.log(`sleep2 ${menu}`);
//     },// arrowFn;
//     sleep3 (menu) {
//         console.log(`sleep3 ${menu}`);
//     },// shortHand;
// };

// me.sleep0("Tax");
// me.sleep1("Tax");
// me.sleep2("Tax");
// me.sleep3("Tax");
// me.playSport("Basketball");


//#################################
//### 3. Intro OP               ###
//#################################

// OOP : Object Oriented Program;

// const car = {
//     brand: "Tesla",
//     model: "x",
//     speed: 100,
//     drive: () => console.log("Driving"),
//     "auto pilot" : () => console.log("Self Diving"),
// };

// console.log(car.brand, car.model);

// // Caller.Method;
// car.drive();
// car["auto pilot"]();

// const calculator = {
//     sum: (x, y) => x + y,
//     minus: (x, y) => x - y,
// };

// let r1 = calculator.sum(5, 7);
// let r2 = calculator.minus(7, 3);
// console.log(r1, r2);

// console.log(car.speed);
// car.speed = calculator.sum(car.speed, 20);
// console.log(car.speed);


//#################################
//### 4. This Keyword           ###
//#################################

// JS Keyword : if, else, for, while, do, switch, this;

// const user = {
//     name: "codecamp",
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello codecamp ${this.name}`);
//     },
//     growOld : function () {
//         console.log(this); // this === user, this.age == user.age;
//         this.age ++;
//     },
//     sonk: {
//         name: "sam",
//         growNew: function () {
//             console.log(this.name);
//         }
//     },
// };

// this.name ของ <obj_sonk> ที่เรียกใช้ this => this จะมีค่าเป็น <obj_sonk>;
// *************Object before the DOT**************;
// this จะกลายเป็น <obj> ที่อยู่หน้า dot;
// user.sonk.growNew();

// Questin : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้;
// user.sayHi();
// user.name = "softwar park";
// user.sayHi();

// console.log(user.age);
// user.growOld();
// console.log(user.age);

// Q : ค่าของ this ถูก Solve ตั้งแต่ตอนที่เขียน function รึเปล่า ?;
// A : ไม่;
// This == Dynamivs Caller/ Dynamics Context;
// function dev(feature) {
//     console.log(`This ${feature} feature developed by ${this.name}`);
// };

// const programer1 = {
//     name: "John",
//     develop: dev,
// };

// const programer2 = {
//     name: "Jane",
//     develop: dev,
// };

// A : this ถูก solve ตอนเรียกใช้ Method;
// Caller.method => this == Caller == *******Object before the dot******;
// Checkpoint-1 : this == object ที่เรียกใช้ method;
// this ใช้โดยที่ไม่ต้องตั้งค่าตัวแปลก่อน 

// this == programer1
// programer1.develop("Login");

// programer1.develop("Cart");

// this == programer2
// programer2.develop("Register");

// this ไม่สามารถ ใช้ใน ARROW FN ได้;
// const user2 = {
//     age: 12,
//     increase: () => {
//         return this.age += 1;
//     },
//     decrease: function () {
//         return this.age -= 1;
//     },
// };
// console.log(user2.increase());
// console.log(user2.decrease());

// console.log(this);

//#################################
//### 5. Execution Context == Caller  
//#################################

// Global(Browser) : window object;
// window.alert("I'm Global");
// this.alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj;
// Hoisting;
// function sayHi() {
//     console.log(this); // window;
// };
// var a = "m";

// Execute Context = Window;
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context;
var name = "Codecamp";
function sayHello() {
    console.log(this.name);
};

sayHello();

const user = {
    name: "John",
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    srcm : function () {
        console.log(`scream by ${this.name}`);
    },
};

// user Caller;
user.say();
// SUMMARY : this == Object Caller;

// Arrow ไม่มีความสามารถในการสร้าง Context;
// Loose Context => Chain to Window; จะหาค่า this ไม่เจอ; 
user.scream(); // dont use this keyword with arrow function;
user.srcm(); 

