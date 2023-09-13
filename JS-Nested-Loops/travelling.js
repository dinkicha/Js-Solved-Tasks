function travelling(Input) {
    let i = 0;
  
    while (Input[i] !== "End")
    {
      let dest = Input[i];
      i++;
      let moneyNeeded = Number(Input[i]);
      i++;
      let moneyOnHand = 0;
      while (Input[i] !== "End")
      {
        moneyOnHand += Number(Input[i]);
        if (moneyOnHand >= moneyNeeded)
        {
          console.log(`Going to ${dest}!`);
          i++;
          break;
        }
        i++;
      }
    }
  }
travelling(["Greece",

  "1000",
  
  "200",
  
  "200",
  
  "300",
  
  "100",
  
  "150",
  
  "240",
  
  "Spain",
  
  "1200",
  
  "300",
  
  "500",
  
  "193",
  
  "423",
  
  "End"])