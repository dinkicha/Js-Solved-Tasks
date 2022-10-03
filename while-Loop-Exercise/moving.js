function moving(input){

    let index = 0;
    let width = input[index];
    index++;
    let length = input[index];
    index++;
    let height = input[index];
    index++;

    let placeVolume = width * length * height;
    let command = input[index];
    index++;

    while (command !== 'Done') {
        let box = Number(command);

        placeVolume -= box;
        if(placeVolume < 0){
            break;
        }
        command = input[index];
        index++;
    }
    
    if(placeVolume > 0){
        console.log(`${placeVolume} Cubic meters left.`);
    }else{
        console.log(`${`No more free space! You need ${Math.abs(placeVolume)} Cubic meters more.`}`);
    }

}
moving(["10",

"10",

"2", 

"20", "20", "20", "20", "122"])