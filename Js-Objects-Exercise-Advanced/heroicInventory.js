function heroicInventory(heroes) {
    const hero = [];
    for (let i = 0; i < heroes.length; i++) {
        let [name, level, items] = heroes[i].split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        hero.push({name, level, items});
    }
    return JSON.stringify(hero)
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'])