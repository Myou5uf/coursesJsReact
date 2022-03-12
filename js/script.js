// Строгий режим устраняет некоторые подводные камни JavaScript, которые 
// не вызывали ошибок, заменяя их так, чтобы они вызывали ошибки. 
// Он также исправляет ошибки, которые мешали движкам JavaScript выполнять 
// определенные оптимизации
"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// Значение объекта может быть изменено
const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);

// "Всплытие" переменных (hoisting)
console.log(name);  //  OUTPUT: undefined
var name = "Alex";
console.log(name);  //  OUTPUT: Alex


// Переменная, объявленная внутри блока, будет доступна только в области этого
// блока.
{
    let result = 50;
}
// console.log(result);
                                // *** Типы данных JS ***
    // ??? Простые типы данных
/* 
    Числа 1, 2, 3
    Строки 'string', 'name'
    Логический тиип (boolean) true / false
    null
    undefinded
    Symbol
    Bigint
*/
    // ??? Комплексные типы данных (Объекты) 
// !!! Спец. объекты
/* 
    Массивы [ ]
    Функции function
    Объект Даты
    Регулярные выражения
    Ошибки
*/
    // !!! Обычные объекты
/* 
    
*/

    //  *** ЧИСЛА ***
let num = 4.6;
console.log(4/0);   //  OUTPUT: Infinily
console.log(-4/0);  //  OUTPUT: -Infinily

console.log('string' * 9);  //  OUTPUT: NaN (Not a Number)

//  *** Строки ***
const persone = "Alex";

    //  *** Логические типы данных ***
const bool = false; // or true;

    //  *** null ***
// console.log(something); //  OUTPUT: something is not defined

    //  *** undefinded ***
let und;
console.log(und); //  OUTPUT: undefinded (Есть переменная, но ее значение отсутствует)


    //  *** Объекты ***
// Объект - это коллекция данных, структура которой используется для хранения любых данных
const student = {
    name: "John",
    age: 22,
    isMarried: false
};

console.log(student.name); 
// or
// console.log(student["name"]);

    //  *** Массивы ***
// В массив можно поместить любой тип данных 
let arr = ['logo.png', 'header.jpg', 6, {}, [], 'footer.bmp'];
console.log(arr[1]);

    // *** Общение с пользователем ***

// ??? alert()
// Функция alert() предназначена для вывода в браузере предупреждающего модального 
// диалогового окна с некоторым сообщением и кнопкой «ОК».
alert('Hello');

// ??? confirm()
// Метод confirm() объекта window применяется для вывода модального диалогового окна с сообщением и
// кнопками «ОК» и «Отмена». Оно обычно используется для запроса у пользователя разрешения 
// на выполнение того или иного действия.
const result = confirm("Вы здесь?");   // question - текст сообщения (вопроса)
console.log("result: ", result);

// ??? prompt()
// Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем 
// для ввода данных и кнопками «ОК» и «Отмена». Это окно предназначено для запроса данных, 
// которые пользователю нужно ввести в текстовое поле.
const answer = +prompt("Вам есть 18?", "18");
// const answer = +prompt("Вам есть 18?", "18"); 
// +prompt для динамической типизации(чтобы получить number ,а не string)
// console.log("answer: ", answer);
// console.log("typeof anwser: ", typeof(answer));
// console.log(answer + 5);

const answerss = [];
// answerss[0] = prompt("Имя: ", "");
// answerss[1] = prompt("Фамилия: ", "");
// answerss[2] = prompt("Сколько вам лет?", "");

// document.write(answerss);
console.log(typeof(answerss));


    // *** Интерполяция ***
const category = "toys";

console.log('https://someurl.com/' + category);     //  конкатенация
console.log(`https://someurl.com/${category}/5`);   //  интерполяция

const user = "Ivan";
alert(`Привет, ${user}`);

    // *** Операторы ***
console.log("arr" + " - object");       //  OUTPUT: arr - object
console.log(4 + " - object");           //  OUTPUT: 4 - object
console.log(4 + +" - object");          //  OUTPUT: NaN

// ???  Унарный +
console.log(4 + +"5");                  //  OUTPUT: 9


let incr = 10,
    decr = 10;  

// ???  Постфикская форма записи
incr++; // Инкремент
decr--; // Декремент
console.log(`incr: ${incr}, decr: ${decr}`);

// ???  Префиксная форма записи
// ++incr; // Инкремент
// --decr; // Декремент
console.log(`incr: ${incr++}, decr: ${decr--}`);

// ???  Остаток от деления %
console.log(5 % 2);

// ???  Оператор справнения ==
console.log(2 * 4 == 8);        //  OUTPUT: true
console.log(2 * 4 == "8");      //  OUTPUT: true
console.log(2 * 4 === "8");     //  OUTPUT: false
// ???   === строгое равенство (сравниет ещё и тип данных)

// ???  Оператор И и ИЛИ
const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);  //  OUTPUT: false. && - Оператор И
console.log(isChecked || isClose);  //  OUTPUT: true. || - Оператор ИЛИ

// ???  Оператор отрицания
console.log(!isChecked || isClose);  //  OUTPUT: false. ! - Оператор отрицани

// ???  Порядок выполнения операторов
console.log(2 + 2 * 2 === 8);       //  OUTPUT: false. 6 !== 8

// ???  Оператор неравенства
console.log(2 + 2 * 2 != "6");  //  OUTPUT: false. != - Оператор неравества
console.log(2 + 2 * 2 !== "6");  //  OUTPUT: true. !== - Оператор строгого неравества


    // *** Система контроля версий Git ***


    // *** Условия ***
if (4 == 4){
    console.log("OK");
} else{
    console.log("Error");
}

const numm = 2323;

if (numm <49){
    console.log("Error");
} else if (numm > 100){
    console.log("Много");
} else{
    console.log("OK!");
}

// ???  Тернарный оператор
(numm === 50) ? console.log("OK") : console.log("Error");

// ???  Конструктор switch
switch (numm){
    case 49: 
        console.log("Неверно");
        break;
    case 100:
        console.log("Неверно");
        break;
    case 50:
        console.log("OK");
        break;
    default:
        console.log("Не в этот раз");
        break;

}

    // *** Циклы ***
let countt = 50;

while (countt <= 55){
    console.log(countt);
    countt++;
}

do{
    console.log(countt);
    countt++;
}
while (countt <= 55);



for (let i = 1; i < 5; i++){
    console.log(countt);
    countt++;
}