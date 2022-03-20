"use strict";

// TODO: 23. Основы ООП, прототипно-ориентированное наследование
/*
    
*/

let str = "something";
// let strObj = new String(str); // ! старый способ

console.log(typeof str);
console.log(typeof strObj);

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    },
};

// * 1 способ объявления объекта
// const jonh = {
//     health: 100,
// };

// jonh.__proto__ = soldier;

// console.log(jonh.armor);
// jonh.sayHello();

// * 2 способ объявления объекта
// Object.setPrototypeOf(jonh, soldier);
const jonh = Object.create(soldier);
jonh.sayHello();
