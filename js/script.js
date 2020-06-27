'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <= 1; i++) {
    const movieName = prompt("Один из последних просмотренных фильмов?", ''),
          movieRating = prompt("На сколько оцените его?", '');
    
    if (movieName != null && movieRating != null && movieName != '' && movieRating != '' && movieName.length < 50) {
        personalMovieDB.movies[movieName] = movieRating;
        console.log('Готово!');
    } else {
        console.log('Прошу ввести данные');
        i--;
    }
}

if (numberOfFilms.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms.count >= 10 && numberOfFilms.count < 50) {
    console.log('Вы классический зритель');
} else if (numberOfFilms.count >= 50)  {
    console.log('Вы настоящий киноман!');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
