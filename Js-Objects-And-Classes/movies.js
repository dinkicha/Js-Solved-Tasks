function movies(input) {
    let listOfMovies = [];
    for (const element of input) {
        if (element.includes("addMovie")) {
            let nameOfMovie = element.split("addMovie ")[1];
            listOfMovies.push({ name: nameOfMovie });
        } else if (element.includes("directedBy")) {
            let info = element.split("directedBy ");
            let name = info[0].trim();
            let director = info[1];
            let movie = listOfMovies.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (element.includes("onDate")) {
            let info = element.split("onDate ");
            let name = info[0].trim();
            let date = info[1];
            let movie = listOfMovies.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (const movie of listOfMovies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
]);
