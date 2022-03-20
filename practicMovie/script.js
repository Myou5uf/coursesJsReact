// TODO: 24. Практика , ч4. Используем объекты
/*  Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // Инициализация
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        // пока введена пустая строка или нажата кнопка отмена или введено не число
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            // выводить сообщение
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    // Запомнить мои последние(2) просмотренные фильмы
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastWatchedMovie = prompt("Один из последних просмотренных фильмов", ""),
                movieRating = +prompt("На сколько оцените его", "");
            // Если введена не пустая строка и не нажата кнопка отмена и длина фильма меньше 50 символов
            if (lastWatchedMovie != null && movieRating != null && lastWatchedMovie != "" && movieRating != "" && lastWatchedMovie.length < 50) {
                // записать в свойство movies объекта personalMovieDB фильм и его рейтинг
                personalMovieDB.movies[lastWatchedMovie] = movieRating;
            } else {
                // иначе снова выводить сообщение с вопросами
                i--;
            }
        }
    },
    // Вывести сообщение исходя от кол-ва просмотренных фильмов
    detectPersonalMovie: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    // Показать в консоле Базу Данных
    showMyDB: function (privat) {
        // Если БД не приватная
        if (privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("БД приватная");
        }
    },
    // Записать в свойство genres жанры, введенные пользователем и вывести в консоль
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt("Введите любимые жанры, через запятую").toLowerCase();
            // Если введена пустая строка или нажата кнопка отмена
            if (genres === "" || genres === null) {
                // Вывести сообщение
                console.log("Введены некорректные данные или пустая строка");
                // Откатить итерацию на один шаг назад(тем самым вызвов вопрос ещё раз)
                i--;
            } else {
                // Иначе записать в БД жанры, разбитые по символу ", "
                personalMovieDB.genres = genres.split(", ");
                // Отсортировать свойсто genres
                personalMovieDB.genres.sort();
            }
        }
        // Вывести в консоли поэлментно жанры
        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        });
    },
    // Переключить статус БД на открытую или праватную
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};
