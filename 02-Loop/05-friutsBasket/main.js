// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย


const obj = {};



const fruitBasket = (key, value) => {
    if (value > 1) {
        key += "s";
    }
    obj[key] = value;
};

fruitBasket("mango", 3);
fruitBasket("orange", 1);
fruitBasket("pineapple", 3);

console.log(obj);
