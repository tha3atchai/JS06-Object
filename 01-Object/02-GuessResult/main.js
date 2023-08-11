// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * {email: "cc@gmail.com", isActive: fail}
user = {};
console.log(user); // ** error user ไม่สามารถเปลี่ยนค่าได้เพราะ constant variable

