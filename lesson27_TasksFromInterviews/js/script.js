"use strict";

// TODO: 27. Задачи с собеседований на понимание основ
/*
     ! 0, '', null, undefined, NaN -  ВСЕГДА false
     ! string, number, [], {}  - true
     ! [] == ""
     ! && - запинается на лжи и возвращает null
     ! || - запинается на правде
*/
// *	Какое будет выведено значение: let x = 5; alert( x++ ); ?
// ? OUTPUT:  5
// *	Чему равно такое выражение: [ ] + false - null + true ?
// !!! [ ] == ""
console.log(typeof ([] + false)); // "false" ("" + false = "false")
console.log([] + false - null + true); // NaN
// ? OUTPUT:  NaN

// *	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let x = (y = 2); // Сначала y присваиваем 2 потом х присваиваем y
console.log(x);
// ? OUTPUT:  2

// *	Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); // [] = "" => строку конкатериуем с 1 потом с 2 в результате "12"
// ? OUTPUT:  "12"

// *	Что выведет этот код: alert( "1"[0] )?
console.log("1"[0]);
// ? OUTPUT:  1

// *	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined);
// ! && - запинается на лжи и возвращает null
// ? OUTPUT:  null

// *	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!(1 && 2)); // OUTPUT: true
console.log(1 && 2); // OUTPUT: 2
// ? OUTPUT:  есть

// *	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// ! || - запинается на правде
// (2 && 3) = 3
// null || 3 = 3
// 3 || 4 = 3
console.log(null || (2 && 3) || 4);
// ? OUTPUT:  3

// *	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Разные хранилищи информации в которой лежит похожая информация
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b);
// ? OUTPUT:  false

// *	Что выведет этот код: alert( +"Infinity" ); ?
console.log(+"Infinity");
// ? OUTPUT:  Infinity

// *	Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");
// ? OUTPUT:  false

// *	Чему равно 0 || "" || 2 || undefined || true || falsе ?
// ! || - запинается на правде
console.log(0 || "" || 2 || undefined || true || false);
// ? OUTPUT:  2
