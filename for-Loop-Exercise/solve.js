function Main(Input) {
    let openedTabs = Number(Input[0]);
    let salary = Number(Input[1]);

    for (let i = 0; i < openedTabs; i++) {
        if (Input[i + 2] === "Facebook")
        {
            salary -= 150;
            if (salary <= 0)
            {
                console.log(`You have lost your salary.`);
                break;
            }
        }
        else if (Input[i + 2] === "Instagram")
        {
            salary -= 100;
            if (salary <= 0)
            {
                console.log(`You have lost your salary.`);
                break;
            }
        }
        else if (Input[i + 2] === "Reddit")
        {
            salary -= 50;
            if (salary <= 0)
            {
                console.log(`You have lost your salary.`);
                break;
            }
        }
    }

    if (salary > 0)
    {
        console.log(salary.toFixed(0));
    }
}
Main(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])