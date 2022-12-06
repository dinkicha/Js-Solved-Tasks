function main(input) {
    let things = Number(input.shift());
    let pattern = /([|])(?<BOSS>[A-Z]{4,})\1:([#])(?<TITLE>[A-Za-z]+\s[A-Za-z]+)([#])/g
    for (let i = 0; i < things; i++) {
        let isString = false;
        let string = input.shift();
        let matches = pattern.exec(string);
        while(matches !== null) {
            isString = true;
            console.log(`${matches.groups.BOSS}, The ${matches.groups.TITLE}
            >> Strength: ${matches.groups.BOSS.length}
            >> Armor: ${matches.groups.TITLE.length}`);
            matches = pattern.exec(string);
        }
        if(!isString) {
            console.log("Access denied!");
        }
    }
}
main(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])