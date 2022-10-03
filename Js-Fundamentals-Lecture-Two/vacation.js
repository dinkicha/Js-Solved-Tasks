function vacation(amount, type, day) {
  let money = 0;

  if (type === "Students") {
    switch (day) {
      case "Friday":
        money = amount * 8.45;
        break;
      case "Saturday":
        money = amount * 9.8;
        break;
      case "Sunday":
        money = amount * 10.46;
        break;
    }
    if (amount >= 30) {
      money = money * 0.85;
    }
  } else if (type === "Business") {
    if (amount >= 100) {
      switch (day) {
        case "Friday":
          money = (amount - 10) * 10.9;
          break;
        case "Saturday":
          money = (amount - 10) * 15.6;
          break;
        case "Sunday":
          money = (amount - 10) * 16;
          break;
      }
    } else {
      switch (day) {
        case "Friday":
          money = amount * 10.9;
          break;
        case "Saturday":
          money = amount * 15.6;
          break;
        case "Sunday":
          money = amount * 16;
          break;
      }
    }
  } else if (type === "Regular") {
    switch (day) {
      case "Friday":
        money = amount * 15;
        break;
      case "Saturday":
        money = amount * 20;
        break;
      case "Sunday":
        money = amount * 22.5;
        break;
    }
    if (amount >= 10 && amount <= 20) {
      money = money * 0.95;
    }
  }

  console.log(`Total price: ${money.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
