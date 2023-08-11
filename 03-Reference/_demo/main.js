const log = console.log;

log("Learn Ref.");

//Copied by Value;
//Copied by Reference;

// PRIMITIVE
let message = "Hello";

//*** */
let word = message;
log(message);
log(word);

message = "HI";
log(message);
log(word);

// OBJECT
// User เก็บ address ของ Literal Object;
let user = {
    name: "John",
};

// *** COPIED BY REFERENCE
// assign Address ของ user ให้กับ employee
let employee = user;

user.name = "Joe";
log(employee.name);

employee.age = 50;
log(user.age);

