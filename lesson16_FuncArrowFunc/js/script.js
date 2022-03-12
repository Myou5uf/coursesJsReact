"use strict";

// TODO: FUNCTION DECLARATION
/*
    ? Создается до начала выполнения скрипта,
    ? можно вызвать перед объявленияем
*/
let num = 20;
function showFirtsMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirtsMessage("Привет World");

function calc(a, b) {
    return a + b;
}

console.log(calc(10, 3));
console.log(calc(5, 2));
console.log(calc(100, 50));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(ret());

// TODO: FUNCTION EXPRESSION
/*
    ? Создается только тогда, когда доходит поток кода,
    ? можно вызвать только после объявления
*/
const logger = function () {
    console.log("FUNCTION EXPRESSION");
};

logger();

// TODO: ARROW FUNCTIONS
/*
    ? Не имеет своего контекста (this)
*/

const calculator = (a, b) => a + b;
