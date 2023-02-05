function sequence(input){

    let n = Number(input[0]);
    let num = 1;

    while(n >= num){
        console.log(num);
        num = num * 2 + 1;
        n++;
    }
}
sequence(["3"])


// function evenPowersOf2(input){
//     let n = Number(input[0]);
//     let num = 1;
//      for (let i = 0; i <= n; i += 2) {
//          console.log(num);
//          num = num * 2 * 2 ;
//      }
    
//     }