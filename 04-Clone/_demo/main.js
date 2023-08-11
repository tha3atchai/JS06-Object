const log = console.log;

log("Object Clone");

// const newTodo = todo;

// newTodo.complete = true;

// Clone
// const newTodo = {};
// เอาต้นแบบมา loop แล้ว assign ทีละ key:value ให้ object ใหม่;
// log(newTodo);

// for(let key in todo) {
    // assign ทีละ key:value ให้ newTodo;
    // newTodo[key] = todo[key];
    // newTodo["task"] = todo["task"] => "Do Hw";
    // newTodo["complete"] = todo["complete"] => false;
    // newTodo["due_date"] = todo["due_date"] => "13-08-2023";
// };

// log(newTodo);
// newTodo.complete = true;
// log(newTodo.complete);
// log(todo.complete);

// 2. Object.assign(dst, [src1, src2, .... , srcN]);

const todo = {
    task: "Do Hw",
    complete: false,
    due_date: "13-08-2023",
};

// const newTodo = {
//     complete: true,
// };

// MERGE/OVERRIDE Direction : RIGHT -> LEFT
// Object.assign(newTodo, todo);

const newTodo = Object.assign({}, todo);

log(newTodo);

// let permission1 = { canView: true};
// let permission2 = { canEdit: true};
// let user = {name: "John", canEdit: false};
// log(user);
// // MERGE/OVERRIDE <obj_user> ด้วย <obj_permission1>, <obj_permission2> ตามลำดับ
// Object.assign(user, permission1, permission2);
// // permission1 -> user = {name: "John", canView: true, canEdit: false}
// // permission2 -> user = {name: "John", canView: true ,canEdit: true}

// log(user);

