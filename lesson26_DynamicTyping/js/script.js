"use strict";

// TODO: 26. Динамическая типизация в JS
/*
    
*/

// * To String

// 1) способ
console.log(typeof String(null));
console.log(typeof String(4));

// 2) способ (сложение со строкой)
console.log(typeof (5 + ""));

// Пример 1
const num = 5;
console.log("https://vk.com/catalog/" + num);

// Пример 2
const fontSize = 26 + "px";
console.log(fontSize);

// * To Number

// 1) способ
console.log(typeof Number("4"));

// 2) способ (унарный плюс)
console.log(typeof +"5");

// 3) способ
console.log(typeof parseInt("15px", 10));

// Пример 1
// let answer = +prompt("Years?", "");
// console.log(typeof answer);

// * To Boolean

// ! 0, '', null, undefined, NaN -  ВСЕГДА false
// ! string, number, [], {}  - true

// 1) Способ
let switcher = null;
if (switcher) {
    console.log("Working...");
}

switcher = 1;
if (switcher) {
    console.log("Working...");
}

// 2) Способ
console.log(Boolean("4"));
console.log(typeof Boolean("4"));

// 3) Способ
console.log(typeof !!"444");
