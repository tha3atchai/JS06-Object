// - ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission 
// - หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า

const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

const permission = {};

const func01 = (obj1, obj2, obj3, obj4) => {
    for(let key1 in obj1){
        for(let key2 in obj2){
            if(obj1[key1] > obj2[key2]){
                continue;
            }else {
                Object.assign(obj1, { [key2] : obj2[key2]});
            }
        }
        Object.assign(obj1, obj2);
    }
    for(let key1 in obj1){
        for(let key2 in obj3){
            if(obj1[key1] > obj3[key2]){
                continue;
            }else {
                Object.assign(obj1, { [key2] : obj3[key2]});
            }
        }
    }
    for(let key1 in obj1){
        for(let key2 in obj4){
            if(obj1[key1] > obj4[key2]){
                continue;
            }else {
                Object.assign(obj1, { [key2] : obj4[key2]});
            }
        }
    }
};

func01(permission1, permission2, permission3, permission4);

console.log(permission1);

