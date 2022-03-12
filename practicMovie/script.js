// Практика, ч3. Используем функции
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(param) {
    for (let i = 0; i < 2; i++) {
        let lastWatchedMovie = prompt("Один из последних просмотренных фильмов", ""),
            movieRating = +prompt("На сколько оцените его", "");
        if (lastWatchedMovie != null && movieRating != null && lastWatchedMovie != "" && movieRating != "" && lastWatchedMovie.length < 50) {
            personalMovieDB.movies[lastWatchedMovie] = movieRating;
            console.log("OK");
        } else {
            console.log("Error");
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalMovie() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
// detectPersonalMovie();

function showMyDB(db) {
    if (db.privat == false) {
        console.log(db);
    }
}
// showMyDB(personalMovieDB);

function writeYourGenres() {
    let i = 0;

    while (i < 3) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        i++;
    }
}

writeYourGenres();

console.log(personalMovieDB);
