function Main(Input) {
    let width = Number(Input[0]);
    let height = Number(Input[1]);
    let maxPieces = width * height;
    let piecesForGuests = 0;
    let notEnough = false;
    let i = 2;

    while (Input[i] !== "STOP")
    {
        let tempPieces = Number(Input[i]);
        piecesForGuests += tempPieces;
        if (piecesForGuests > maxPieces)
        {
            notEnough = true;
            break;
        }
        i++;
    }

    if (notEnough)
    {
        console.log(`No more cake left! You need ${piecesForGuests - maxPieces} pieces more.`);
    }
    else
    {
        console.log(`${maxPieces - piecesForGuests} pieces are left.`);
    }
}
Main("10",

"2",

"2",

"4",

"6",

"STOP")