"use strict";

// TODO: 22. Передача по ссылке или по значению, Spread оператор (ES6-ES9)
/*
    
*/

let a = 5,
    b = a;

console.log(a, b);

b += 5;
console.log(a, b);

const obj = {
    a: 5,
    b: 1,
};

const copy = obj; // ! copy - ссылка на уже существующий obj
copy.a = 10;

console.log(obj);
console.log(copy);

// Скопировать объект
function copyObject(mainObject) {
    let copyObj = {};

    let key;
    for (key in mainObject) {
        copyObj[key] = mainObject[key];
    }

    return copyObj;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 10,
        y: 20,
    },
};

const newNumbers = copyObject(numbers);
newNumbers.a = 345;

// ? Поверхностная копия объекта - копия 1го уровня (для глубоких копий - создается снова ссылка)
newNumbers.c.x = 345;
console.log("Оригинал: ", numbers);
console.log("Копия: ", newNumbers);

// * Object.assign() используется для копирования значений всех собственных перечисляемых свойств
// * из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
const add = {
    d: 17,
    e: 34,
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

// * Метод slice() возвращает новый массив, содержащий копию части исходного массива.
const arr = ["a", "b", "c", "d", "e", "f"];
const copyArr = arr.slice();

copyArr[1] = "Копия";
console.log(arr);
console.log(copyArr);

// * Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "inst"];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 3, 5];
log(...num);

const array = ["a", "b"];
const newArray = [...array];
console.log(newArray);

const q = {
    one: 1,
    two: 2,
};

const copyQ = { ...q };
console.log(copyQ);
