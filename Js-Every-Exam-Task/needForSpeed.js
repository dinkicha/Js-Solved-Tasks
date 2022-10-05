function main(input) {
    let cars = {};
    let carsCount = Number(input.shift());
    for (let i = 0; i < carsCount; i++) {
        let [name, mileage, fuel] = input.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);
        cars[name] = { mileage, fuel };
    }

    let commandLine = input.shift();
    while (commandLine !== "Stop") {
        let [command, carName, firstArgument, secondArgument] =
            commandLine.split(" : ");
        if (command === "Drive") {
            let distance = Number(firstArgument);
            let fuel = Number(secondArgument);
            if (cars[carName].fuel >= fuel) {
                cars[carName].mileage += distance;
                cars[carName].fuel -= fuel;
                console.log(
                    `${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
                );
                if (cars[carName].mileage >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        } else if (command === "Refuel") {
            let fuel = Number(firstArgument);
            let oldFuel = cars[carName].fuel;
            if (oldFuel + fuel > 75) {
                cars[carName].fuel = 75;
                console.log(`${carName} refueled with ${75 - oldFuel} liters`);
            } else {
                cars[carName].fuel += fuel;
                console.log(`${carName} refueled with ${fuel} liters`);
            }
        } else if (command === "Revert") {
            let kilometers = Number(firstArgument);
            if (cars[carName].mileage - kilometers < 10000) {
                cars[carName].mileage = 10000;
            } else {
                cars[carName].mileage -= kilometers;
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        }
        commandLine = input.shift();
    }

    //SoftUni removed sorting from the judge system for the second time!
    //   let carEntries = Object.entries(cars);
    //   carEntries.sort((a, b) => {
    //     if (b[1].mileage === a[1].mileage) {
    //       return a[0].localeCompare(b[0]);
    //     } else {
    //       return b[1].mileage - a[1].mileage;
    //     }
    //   });

    for (let car of Object.entries(cars)) {
        console.log(
            `${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`
        );
    }
}
main([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
]);
