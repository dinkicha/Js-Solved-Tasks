function movieDay(input){
    let timeForPhotos = Number(input[0]);
    let countScenes = Number(input[1]);
    let timeForScene = Number(input[2]);

    let terrainPreparation = timeForPhotos * 0.15;
    let timeForFilmingTheScenes = countScenes * timeForScene;
    let neededTime = terrainPreparation + timeForFilmingTheScenes;

    if(neededTime <= timeForPhotos){
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeForPhotos - neededTime)} minutes left!`);
    }else{
        console.log(`Time is up! To complete the movie you need ${(neededTime - timeForPhotos)} minutes.`);
    }

}
movieDay(["120",
"10",
"11"])