// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา 
// - ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub Program-1 : Input;

let name = prompt("Enter Product Name: ");
let quantity = +prompt("Enter Product Quantity: ");
let price= +prompt("Enter Product Price: ");
let discount = +prompt("Enter Product Discount: ");

// Sub Program-2 : CreateObject;

const products = {name, quantity, price, discount}; // Property shorthand;

console.log(products);

// Sub Program-3 : Calculate Price;

// -- price, quantity, discount => TotalPrice;

// const calPrice = (price, quantity, discount = 0) => {
//     let totalPrice = price * quantity * (1 - discount);
//     return totalPrice;
// };

// console.log(calPrice(products.price, products.quatity, products.discount));

const calcPrice = (productsObj) => {
    let price = productsObj.price;
    let quantity = productsObj.quantity;
    let discount = productsObj.discount || 0;
    return price * quantity * (1 - discount);    
};

let result = calcPrice(products);

console.log(result);
