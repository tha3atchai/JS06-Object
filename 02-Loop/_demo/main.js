// // const user = {
// //     firstName: "Codecamp",
// //     lastName: "Software Park",
// //     age: 15,
// // };


// // for(let key in user) {
// //     console.log(user[key]);
// // };

//  // object ###################

// const user = {
//     name: 'John',
//     age: 33,
//     isMarried: false,
//     address: {
//         village: 'Ladda land',
//         province: 'Chiang mai',
//     },
// };

// // get DATA 
// console.log(user.name);
// console.log(user['name']); 

// let a = 'name';
// console.log(user.a); // วิ่งไปหา key a => undefined
// console.log(user[a]);  //user['name'] => john
// // NOTEEEEEEEEEEEEEEEEEEE  เมื่อชื่อ key ถูกเก็บไว้ในตัวแปร ต้อง access ผ่าน [ ]

// // ตอน Delete 
// delete user.isMarried;
// console.log(user);
// delete user['age'];
// console.log(user);

// let b = 'address';
// delete user[b];
// console.log(user[b]);
// console.log(user);

const user = {
    name: "John",
    age: 27,
    isMarried: false,
};

for(let key in user) {
    user[key] += 5
};

console.log(user);

//Critical Point;
// - bracket notation ใช้กับคีย์ที่เป็น string หรือ ตัวแปรที่เก็บ string;
// - for(<key>in<obj>) Js จะ auto reassign ใหม่ให้ทุกรอบ (string);
// - obj[key] = obj[key] + new => container = value + new;





