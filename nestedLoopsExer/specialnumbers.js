function Main(Input) {
    let mainNum = Number(Input[0]);
    let output = ""

    for (let i = 1111; i <= 9999; i++) {
        let stringedNumber = i.toString();
        let isSpecial = true;
        for (let i = 0; i < stringedNumber.length; i++) {
            if (mainNum % Number(stringedNumber[i]) !== 0)
            {
                isSpecial = false
            }
        }

        if (isSpecial)
        {
            output += i + " "
        }
    }

    console.log(output);
}

Main(["3"])