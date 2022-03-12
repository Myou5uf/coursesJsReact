"use strict";

// TODO: Методы и свойства СТРОК
/*
    ? Создается до начала выполнения скрипта,
*/

//  * Свойство length - возвращает длину строки
const str = "test";
const arr = ["a", "b", "c", "d", "e"];
console.log(arr.length);
console.log(str[2]);

//  * toUpperCase() - возвращает значение строки, преобразованное в верхний регистр.
console.log(str);
console.log(str.toUpperCase());

//  * toLowerCase() - возвращает значение строки, преобразованное в нижний регистр.
const str1 = "TEST";
console.log(str1);
console.log(str1.toLowerCase());

//  * indexOf() - возвращает индекс первого вхождения указанного значения в строковый объект String
const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

// * slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
const log = "Hello World";
console.log(log);
console.log(log.slice(6, 10));
console.log(log.slice(6));
console.log(log.slice(-5));

// * substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.
const sub = "Hello World";
console.log(sub.substring(6, 11));

// TODO: Методы и свойства ЧИСЕЛ

const num = 12.2;
console.log(Math.round(num));

const px = "12.2px";
console.log(parseInt(px));
console.log(parseFloat(px));
