'use strict';

//const dayjs = require("dayjs");

const fl = new FilmLibrary();


function generateTable(films) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    films.filmArray.forEach((film) => {
        
        const tr = document.createElement('tr');

        if(film.date !== undefined && film.rating !== undefined) {
            tr.innerHTML = `<td>${film.id}</td><td>${film.title}</td><td>${film.favorites}</td><td>${film.date.format('YYYY-MM-DD')}</td><td>${film.rating}</td>`;
            tr.innerHTML += `<td><button type="button" class="btn btn-danger">X</button></td>`;
            
            const buttonX = tr.querySelector('button');
            buttonX.addEventListener('click', (event) => {
                console.log(`Delete film ${film.id}`);
                films.filmArray = films.filmArray.filter((f) => f.id !== film.id);
                // re-generate table
                generateTable(films);
            });

            tbody.appendChild(tr);

        }
        
    });
}

function filterFavorites(films) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    films.filmArray.filter(film => film.favorites === true).forEach((film) => {
        
        const tr = document.createElement('tr');

        if(film.date !== undefined && film.rating !== undefined) {
            tr.innerHTML = `<td>${film.id}</td><td>${film.title}</td><td>${film.favorites}</td><td>${film.date.format('YYYY-MM-DD')}</td><td>${film.rating}</td>`;
            tr.innerHTML += `<td><button type="button" class="btn btn-danger">X</button></td>`;
            
            const buttonX = tr.querySelector('button');
            buttonX.addEventListener('click', (event) => {
                console.log(`Delete film ${film.id}`);
                films.filmArray = films.filmArray.filter((f) => f.id !== film.id);
                // re-generate table
                generateTable(films);
            });

            tbody.appendChild(tr);

        }
        
    });
}

function filterBest(films) {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    films.filmArray.filter(film => film.rating === 5).forEach((film) => {
        
        const tr = document.createElement('tr');

        if(film.date !== undefined && film.rating !== undefined) {
            tr.innerHTML = `<td>${film.id}</td><td>${film.title}</td><td>${film.favorites}</td><td>${film.date.format('YYYY-MM-DD')}</td><td>${film.rating}</td>`;
            tr.innerHTML += `<td><button type="button" class="btn btn-danger">X</button></td>`;
            
            const buttonX = tr.querySelector('button');
            buttonX.addEventListener('click', (event) => {
                console.log(`Delete film ${film.id}`);
                films.filmArray = films.filmArray.filter((f) => f.id !== film.id);
                // re-generate table
                generateTable(films);
            });

            tbody.appendChild(tr);

        }
        
    });
}

function seenLastMonth(films) {
    let today = dayjs().format('YYYY-MM-DD');
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    films.filmArray.filter(film => film.date !== undefined).forEach((film) => {
        
        const tr = document.createElement('tr');

        if(film.rating !== undefined && film.date.diff(today, 'month') <= 1) {
            tr.innerHTML = `<td>${film.id}</td><td>${film.title}</td><td>${film.favorites}</td><td>${film.date.format('YYYY-MM-DD')}</td><td>${film.rating}</td>`;
            tr.innerHTML += `<td><button type="button" class="btn btn-danger">X</button></td>`;
            
            const buttonX = tr.querySelector('button');
            buttonX.addEventListener('click', (event) => {
                console.log(`Delete film ${film.id}`);
                films.filmArray = films.filmArray.filter((f) => f.id !== film.id);
                // re-generate table
                generateTable(films);
            });

            tbody.appendChild(tr);

        }
        
    });
}

let activeFilter = document.getElementById("active-filter");


function showAll() {
    activeFilter.innerHTML = "All";
    generateTable(fl);
}

function showFavorites() {
    activeFilter.innerHTML = "Favorites";
    filterFavorites(fl);
}

function bestRated() {
    activeFilter.innerHTML = "Best Rated";
    filterBest(fl);
}


function lastMonth() {
    activeFilter.innerHTML = "Seen Last Month";
    seenLastMonth(fl);
}



// MAIN CODE - RUNS AT "DOM Loaded" EVENT
document.addEventListener('DOMContentLoaded', (event) => {
    
    //const fl = new FilmLibrary();
    const film1 = new Film(1, "Pulp Fiction", true, "March 10, 2022", 5);
    const film2 = new Film(2, "21 Grams", true, "March 17, 2022", 4 );
    const film3 = new Film(3, "Star Wars", false, undefined, undefined );
    const film4 = new Film(4, "Matrix", false, undefined, undefined );
    const film5 = new Film(5, "Shrek", false, "March 21, 2022", 3 );
    const film6 = new Film(6, "Harry Potter", true, "April 01, 2022", 5);

    fl.addNewFilm(film1, film2, film3, film4, film5, film6);

    
    //generateTable(fl);
    const all = document.getElementById("all").addEventListener("click", showAll);
    const favorites = document.getElementById("favorites").addEventListener("click", showFavorites);
    const best = document.getElementById("best").addEventListener("click", bestRated);
    const seenLastMonth = document.getElementById("last-month").addEventListener("click", lastMonth);

    showAll();
    

});

