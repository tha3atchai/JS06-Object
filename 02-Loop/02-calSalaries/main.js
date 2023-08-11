// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

const isEmpty = (obj) => {
    let isEmpty = true;
    for(let k in obj){
        isEmpty = false;
    }
    return isEmpty;
};

const calSalaries = (obj) => {
    if (!isEmpty(obj)) {
        let sum = 0;
        for(let k in obj) {
            sum += obj[k];
        };
        return sum;
    }  
    return 0;
};


console.log(calSalaries(salaries));
