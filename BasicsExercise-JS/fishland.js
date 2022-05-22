function laplanciq(input) {


   let cenaSkumriqKg = Number(input[0]);
   let cenaCacaKg = Number(input[1]);
   let KgPalamud = Number(input[2]);
   let KgSafrid = Number(input[3]);
   let KgMidi = Number(input[4]);



   let palamud = 0.60 * cenaSkumriqKg;;
   let safrid = 0.80 * cenaCacaKg;
   let midi = 7.50;



   let cenaPalamud = cenaSkumriqKg + palamud;
   let sumaPalamud = KgPalamud * cenaPalamud;
   let cenaSafrid = cenaCacaKg + safrid;
   let sumaSafrid = KgSafrid * cenaSafrid;
   let sumaMidi =  KgMidi * midi;

   let smetka = sumaPalamud + sumaSafrid + sumaMidi;

   console.log(smetka.toFixed(2));
   
   
}
laplanciq([6.90,4.20,1.5,2.5,1]);