function attachEventsListeners() {
    // every rations so we can have it and make maths with them
    const ratios = { 
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400    
    }

    // converting to days and then calculating everything with  days * etc...
    function convert(value, unit) {
        const inDays = value / ratios[unit];    
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }

    //Getting all inputFields (where the user types in)
    const days = document.getElementById('days'); 
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    //Getting buttons and setting them eventListener with build in function
   document.getElementById('daysBtn').addEventListener('click', onConvert);
   document.getElementById('hoursBtn').addEventListener('click', onConvert);
   document.getElementById('minutesBtn').addEventListener('click', onConvert);
   document.getElementById('secondsBtn').addEventListener('click', onConvert);

    //function that return the parent element of the input
   function onConvert(e) {
    const input = e.target.parentElement.querySelector('input[type="text"]');
    // console.log(input) returns the input field where the user types in
    const time = convert(Number(input.value), input.id);
    //Numbering the things

    //setting them the new value
    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
   }    
}