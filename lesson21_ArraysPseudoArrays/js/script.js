"use strict";

// TODO: 21. Массивы и псевдомассивы
/*
    
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// ! Свойство length - это индекс последнего элемента + 1
// console.log(arr.length)      // ? OUTPUT: 10
// arr[99] = 0;
// console.log(arr.length);     // ? OUTPUT: 100
// console.log(arr);   // ? OUTPUT: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, <89 empty items>, 0 ]

// * pop() удаляет последний элемент из массива и возвращает его значение
arr.pop();
console.log(arr);

// * push() добавляет один или более элементов в конец массива и возвращает новую длину массива
arr.push(11);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

// * Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// * split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
const data = prompt("Введите названия телефонов", "");
const products = data.split(", ");
console.log(products);

// * join() объединяет все элементы массива (или массивоподобного объекта) в строку.
console.log(products.join("; "));

// * sort() на месте сортирует элементы массива и возвращает отсортированный массив.
console.log(products.sort());
const arr2 = [2, 13, 26, 8, 10];
console.log(arr2.sort());

// ! Паттерн для отсортировки массива с числами
function compareNumbers(a, b) {
    return a - b;
}
console.log(arr2.sort(compareNumbers));
