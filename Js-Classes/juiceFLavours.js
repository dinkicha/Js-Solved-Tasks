function Main(juices) {
    let juicesObj = [];
    let bottles = {};
    juices.forEach((j) => {
      let [juiceName, juiceQuantity] = j.split(" => ");
      juiceQuantity = Number(juiceQuantity);
  
      let isJuice = juicesObj.find((j) => j.juiceName == juiceName);
  
      if (!isJuice) {
        juicesObj.push({ juiceName, juiceQuantity });
        let juiceBottlesAmount = Math.floor(juiceQuantity / 1000);
  
        if (juiceBottlesAmount > 0) {
          bottles[juiceName] = juiceBottlesAmount;
        }
      } else {
        isJuice.juiceQuantity += juiceQuantity;
        let juiceBottlesAmount = Math.floor(isJuice.juiceQuantity / 1000);
  
        if (juiceBottlesAmount > 0) {
          bottles[juiceName] = juiceBottlesAmount;
        }
      }
    });
  
    for (const [bottle, amount] of Object.entries(bottles)) {
      console.log(`${bottle} => ${amount}`);
    }
  }