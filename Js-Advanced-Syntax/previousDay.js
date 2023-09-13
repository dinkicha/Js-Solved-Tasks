function date(year, month, day) {
    const nextDay = new Date(year, month - 1, day - 1);
    const newYear = nextDay.getFullYear();
    const newmonth = nextDay.getMonth() + 1;
    const newDay = nextDay.getDate();

    console.log(`${newYear}-${newmonth}-${newDay}`);
}
date(2016, 9, 30)