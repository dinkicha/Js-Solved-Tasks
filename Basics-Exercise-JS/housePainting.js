function kushta(input) {
   let xVisochinaNaKushta = Number(input[0]);
   let yDuljinaStranichnaStena = Number(input[1]);
   let hVisochinaTriugulnaStena = Number(input[2]);

let stranichnaStena = xVisochinaNaKushta * yDuljinaStranichnaStena;
let prozorecPlosht = 1.5 * 1.5;
let dveteStranici = 2 * stranichnaStena - 2 * prozorecPlosht;
let zadnaStena = xVisochinaNaKushta * xVisochinaNaKushta;
let vhod = 1.2 * 2;
let obshtoPrednaZadna = 2 * zadnaStena - vhod;
let obshtaPlosht = dveteStranici + obshtoPrednaZadna;
let zelenaBoq = obshtaPlosht / 3.4;

//Pokriv
let dvataPravougulnikaNaPokriva = 2*(xVisochinaNaKushta * yDuljinaStranichnaStena);
let dvataTriugulnika = 2 * (xVisochinaNaKushta * hVisochinaTriugulnaStena / 2);
let obshtaPlosht2 = dvataPravougulnikaNaPokriva + dvataTriugulnika;

let chervenaBoq = obshtaPlosht2 / 4.3;

console.log(zelenaBoq.toFixed(2));
console.log(chervenaBoq.toFixed(2));

}
kushta([6,10,5.2]);