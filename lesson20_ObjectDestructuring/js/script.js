"use strict";

// TODO: 20. Объекты, деструктуризация объектов
/*
    
*/

const options = {
    name: "test",
    width: 1024,
    height: 800,
    colors: {
        border: "black",
        background: "red",
    },
    size: 20,
    fontFamily: "Helvetica",
    makeTest: function () {
        console.log("First function in object");
    },
};

options.makeTest();
// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof options[key] === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

for (let key in options) {
    counter++;
}
console.log(counter);

// * Object.keys возвращает массив строковых элементов,
// * соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте
console.log(Object.keys(options).length);

// TODO: Деструктуризация объектов
const { border, background } = options.colors;
console.log(border);
