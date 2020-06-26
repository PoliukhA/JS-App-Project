'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

var movieName1 = prompt("Один из последних просмотренных фильмов?", '');
var movieRating1 = prompt("На сколько оцените его?", '');
var movieName2 = prompt("Один из последних просмотренных фильмов?", '');
var movieRating2 = prompt("На сколько оцените его?", '');

personalMovieDB.movies[movieName1] = movieRating1;
personalMovieDB.movies[movieName2] = movieRating2;

console.log(personalMovieDB);