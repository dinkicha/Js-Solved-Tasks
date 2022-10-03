function trekkingMania(Input) {

    let groups = Number(Input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let peopleAmt = 0;

    for (let i = 0; i < groups; i++) {
        let temp = Number(Input[i + 1])
        if (temp <= 5)
        {
            musala += temp;
        }
        else if (temp > 5 && temp <= 12)
        {
            monblan += temp;
        }
        else if (temp > 12 && temp <= 25)
        {
            kilimandjaro += temp;
        }
        else if (temp > 25 && temp <= 40)
        {
            k2 += temp;
        }
        else if (temp > 40)
        {
            everest += temp;
        }

        peopleAmt += temp;
    }

    musala = musala / peopleAmt * 100;
    monblan = monblan / peopleAmt * 100;
    kilimandjaro = kilimandjaro / peopleAmt * 100;
    k2 = k2 / peopleAmt * 100;
    everest = everest / peopleAmt * 100;

    console.log(`${musala.toFixed(2)}%`);
    console.log(`${monblan.toFixed(2)}%`);
    console.log(`${kilimandjaro.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
}


trekkingMania(["5","25","41","31","250","6"])