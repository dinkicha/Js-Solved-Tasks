function building(input) {

    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);

    for (let floor = floorCount; floor > 0; floor--) {
        let res = "";
        for (let room = 0; room < roomCount; room++) {
            if (floor === floorCount) {

                res += `L${floor}${room} `

            } else if (floor % 2 !== 0) {
                res += `A${floor}${room} `

            } else {

                res += `O${floor}${room} `
            }

        }
        console.log(res);
    }
}
building(["6",

    "4"])