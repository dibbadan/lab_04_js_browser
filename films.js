'use strict';

function Film(id, title, favorites=false, date, rating) {
    this.id = id,
    this.title = title,
    this.favorites = favorites,
    this.date = typeof(date) != "undefined" ? dayjs(date, 'MMMM DD, YYYY', 'en') : undefined,
    this.rating = rating
}

function FilmLibrary() {
    
    this.filmArray = [];

    this.addNewFilm = (...film) => {
        this.filmArray.push(...film);
    }

    
    this.sortByDate = () => {

        const sorter = (a,b) => {
            const aDateExist = typeof a.date !== 'undefined';
            const bDateExist = typeof b.date !== 'undefined';
            return (bDateExist - aDateExist) || (a.date - b.date);
        }

        const sorted = [...this.filmArray].sort(sorter);
        return sorted;
    }



    this.deleteFilm = (id) => {
        this.filmArray.forEach((item, index) => {
            item.id === id ? this.filmArray.splice(index,1) : 0
        })
    }

    this.showLibrary = (film) => {
        this.filmArray.forEach(film => {
            console.log(film.title);
        });
    }

    this.resetWatchedFilms = () => {
        this.filmArray.forEach((item) => {
            typeof item.date !== 'undefined' ? item.date = undefined : 0 
        })
    }

    this.getRated = () => {
        console.log("***** Films filtered, only the rated ones *****\n");
        this.filmArray
                .filter(item => item.rating > 0 && item.rating !== 'undefined')
                    .sort((a,b) => a.rating-b.rating)
                        .forEach((item) => console.log(`Id: ${item.id}, Title: ${item.title}, Favorite: ${item.favorites}, Watch date: ${item.date}, Score: ${item.rating}\n`));
    }

};