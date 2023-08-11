console.log("learn object");

// DataTypes;
// - Primitive : Boolean, Number, String, etc...;
// - Non-Primitive : Object;

// ########################
// ## Object Declaration ##
// ########################
// {} == stand for Object / Scope;
// { record_1, record_2, record_3, ...};
// each record => <key_name>:<value>;
// <value>any DataType;
// <key_name></key_name>
// record === property (คุณสมบัติม สิ่งที่มี) == key-value pair;

const user = {
    firstName: "Thawatchai",
    lastName: "On-in",
    age: 25,
    isAdmin: true,
    "like human": true,
};

console.log(user);

// ############################
// ## ACCESS, MODIFY, DELETE ##
// ############################

// Every action need <KEY_NAME> !!;
// Dot Notation <obj>.<key_name>;
// ข้อจำกัด : เข้าถึง key ที่มี spacebar ไม่ได้;
// ถ้าไม่มี record => return undefined;

// GET,POLL,READ
console.log(user);
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
console.log(user["like human"]);
console.log(user.salary);

// MODIFY, UPDATE 
// Syntax: obj.old_keyname = newValue;
user.firstName = "Sonk";
user.age = 25;
user.age++
user.age += 2;
console.log(user.firstName);
console.log(user.age);

// ADD
// Syntax : obj.new_key = newValue;
user.address = "bangkok";
console.log(user);

// DELETE
// Syntax : delete obj.key_name

delete user.isAdmin;
console.log(user);

// ############################
// ## NESTED Object          ##
// ############################

const employee = {
    fullName : "John Doe",
    salary : 500_000,
    address : {
        district: "Phaya Thai",
        province: "Bangkok",
        country: "Thailand",
    },
};

console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);
console.log(employee.address);

employee.address.province = "Nonthaburian";
delete employee.address.country;

// Dot ใช้กับ Object เท่านั้น ;
// ห้ามมมม  ใช้กับ undefined;
// วิธีแก้ optional chaning => <undefined>?.<value>;

console.log(employee.address?.province); // undefined.provice;
console.log(employee); // undefined.provice;

const product = {
    id: 227,
    name: "IPhone",
    price: 50_000,
    "is mobile": true,
};

console.log(product.discount);

// IN Operator
// Syntax : <key_name_string> in <obj> => BOOL
console.log("name" in product);
console.log("discount" in product);

// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>)
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("discount"));

// ############################
// ## 5.Bracket Notation     ##
// ############################


// Syntax : <obj>["<key_name_string>"]
// 1. ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string;
// 2. ถ้าใช้ string ต้องเป็นตัวแปรที่เก็บ string // computed key;
// Access Key-value ผ่านชื่อตัวแปรได้;
console.log(product.id);
console.log(product["id"]);

// console.log(product.is mobile); crash
console.log(product["is mobile"]);

product["name"] = "Iphone-15";
// console.log(product);

let aaaa = "name";
console.log(product[aaaa]);
console.log(product.aaaaa);
console.log(product["name"]);// product.aaaa === product["aaaa"] === undefined;








