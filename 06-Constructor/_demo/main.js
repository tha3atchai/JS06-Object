
const log = console.log;

log("Constructor Function");

const dev1 = {
    name: "John_Wick",
    age: 32,
    role: "dev",
    salary: 40_000,
    dev: function () {
        console.log("I'm develop some features");
    },
};

// Object Creators == Constructor Function;

function Developer (name, age) {
    // [1] Implicit create this = {} 
    this.name = name; // {name: name}
    this.age = age; // {name: "John_Wick ,age: 25}
    this.role = "dev";// {name: "John_Wick ,age: 25, role: "dev"}
    this.salary = 40_000;// {name: "John_Wick ,age: 25, role: "dev", salary: 40_000}
    this.dev = function () {
        console.log(`${this.name} I'm develop some features`);
    };// {name: "John_Wick ,age: 25, role: "dev", salary: 40_000, dev: function(){}}
};

// this == dev2
// [3] this === Instance
const dev2 = new Developer("John_Wick", 25);
log(dev2);

const dev3 = new Developer("Jane", 25);
log(dev3);

dev2.dev();
dev3.dev();






