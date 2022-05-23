function seriesCalculator(input) {

    let seriesName = input[0];
    let countSeasons = Number(input[1]);
    let countEpisodes = Number(input[2]);
    let timeEpisodesWithoutAdverts = Number(input[3]);

    let adverts = timeEpisodesWithoutAdverts * 0.20;
    let episodeWithAdverts = adverts + timeEpisodesWithoutAdverts;
    let specialEpisode = countSeasons * 10;
    let totalTimeWatching = episodeWithAdverts * countEpisodes * countSeasons + specialEpisode;

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTimeWatching} minutes.`)

}
seriesCalculator(["Game of Thrones",
"7",
"10",
"50"])