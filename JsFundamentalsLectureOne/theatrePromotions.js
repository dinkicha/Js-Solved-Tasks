function theatrePromotions(day, age) {
  let money = 0;

  switch (day) {
    case "Weekday":
      if (age >= 0 && age <= 18) {
        money = money + 12;
        console.log(`${money}$`);
      } else if (age >= 18 && age <= 64) {
        money = money + 18;
        console.log(`${money}$`);
      } else if (age >= 64 && age <= 122) {
        money = money + 12;
        console.log(`${money}$`);
      } else {
        console.log("Error!");
      }
      break;
    case "Weekend":
        if (age >= 0 && age <= 18) {
            money = money + 15;
            console.log(`${money}$`);
          } else if (age >= 18 && age <= 64) {
            money = money + 20;
            console.log(`${money}$`);
          } else if (age >= 64 && age <= 122) {
            money = money + 15;
            console.log(`${money}$`);
          } else {
            console.log("Error!");
          }
      break;
    case "Holiday":
        if (age >= 0 && age <= 18) {
            money = money + 5;
            console.log(`${money}$`);
          } else if (age >= 18 && age <= 64) {
            money = money + 12;
            console.log(`${money}$`);
          } else if (age >= 64 && age <= 122) {
            money = money + 10;
            console.log(`${money}$`);
          } else {
            console.log("Error!");
          }
      break;
  }
  
}
theatrePromotions("Weekday", 42);
