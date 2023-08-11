// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)

// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator() {
    this.read = function () {
        this.x = +prompt("Enter your number: ");
        this.y = +prompt("Enter your number: ");
    };
    this.sum = function () {
        return this.x + this.y;
    };
    this.mul = function () {
        return this.x * this.y;
    };
};

const calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());