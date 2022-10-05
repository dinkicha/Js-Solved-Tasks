function main(arr) {
    let initialHealth = 100;
    let initialBitcoins = 0;
    arr = arr.split("|");
    let bestRoom = 0;
    let isDead = true;
    while (arr.length > 0) {
      let tokens = arr.shift().split(" ");
      bestRoom++;
      switch (tokens[0]) {
        case "potion":
          let healthHealed = 0;
          if (initialHealth >= 100) {
            continue;
          } else {
            if (Number(tokens[1]) + initialHealth >= 100) {
              healthHealed = 100 - initialHealth;
              initialHealth = 100;
            } else {
              initialHealth += Number(tokens[1]);
              healthHealed = Number(tokens[1]);
            }
            console.log(`You healed for ${healthHealed} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
          }
          break;
        case "chest":
          initialBitcoins += Number(tokens[1]);
          console.log(`You found ${tokens[1]} bitcoins.`);
          break;
        default:
          initialHealth -= tokens[1];
          if (initialHealth > 0) {
            console.log(`You slayed ${tokens[0]}.`);
          } else {
            console.log(`You died! Killed by ${tokens[0]}.`);
            isDead = false;
            console.log(`Best room: ${bestRoom}`);
            break;
          }
          break;
      }
      if (!isDead) {
        break;
      }
    }
    if (isDead) {
      console.log(`You've made it!`);
      console.log(`Bitcoins: ${initialBitcoins}`);
      console.log(`Health: ${initialHealth}`);
    }
  }
  main("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");