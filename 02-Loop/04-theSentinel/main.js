// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

const obj = {};
let key;
let value;

const theSentinel = (key, value) => {
    obj[key] = value;
};

do {
    key = prompt("Enter KEY: ");
    value = prompt("Enter VALUE: ");
    if(key === "stop" || value === "stop") break;
    theSentinel(key, value);
    }while (true);

console.log(obj);