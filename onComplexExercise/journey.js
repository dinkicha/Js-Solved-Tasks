function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let finalSum = 0;
    if(budget <= 100){
        console.log('Somewhere in Bulgaria');
        if(season === 'summer'){
            console.log(`Camp - ${(budget * 0.30).toFixed(2)}`);
        }else if(season === 'winter'){
            console.log(`Hotel - ${(budget * 0.70).toFixed(2)}`);
        }
    }else if(budget <= 1000){
        console.log('Somewhere in Balkans');
        if(season === 'summer'){
            console.log(`Camp - ${(budget * 0.40).toFixed(2)}`);
        }else if(season === 'winter'){
            console.log(`Hotel - ${(budget * 0.80).toFixed(2)}`);

    }
    
    }else if(budget > 1000){
        console.log('Somewhere in Europe');
        console.log(`Hotel - ${(budget * 0.90).toFixed(2)}`);
    }


}
journey(["50", "summer"])