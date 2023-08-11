// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น



// before 
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};


// // after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };

const multiplyNumeric = (obj, num) => {
    for(let k in obj)
        if(typeof(obj[k]) === "number") obj[k] *= num;
};


multiplyNumeric(menu, 3);
console.log(menu);