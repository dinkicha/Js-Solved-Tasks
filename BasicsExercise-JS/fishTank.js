function fishTank(input) {
    let duljinaCm = Number(input[0]);
    let shirochinaCm = Number(input[1]);
    let visochinaCm = Number(input[2]);
    let percent = Number(input[3]);

    let obemAkvarium = duljinaCm * shirochinaCm * visochinaCm;
    let obemLitri = obemAkvarium * 0.001;
    let zaetoProstranstvo = 0.17;
    let nujniLitri = obemLitri *(1-zaetoProstranstvo);

    console.log(nujniLitri);
}
fishTank(["85 ",

"75 ",

"47 ",

"17 "]);