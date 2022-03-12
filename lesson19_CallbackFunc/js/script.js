"use strict";

// TODO: 19. Callback- функции
/*
    ? Колбэк-функция (или обратный вызов) - это функция, переданная в другую функцию
    ? в качестве аргумента, которая затем вызывается по завершению какого-либо действия.
*/

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
}

learnJS("JS", done);
