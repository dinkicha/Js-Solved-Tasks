function lockedProfile() {

    //getting all buttons setting them event listner for click and do function onToggle we use array.from
    // because after we use forEach and the judge system is not working properly
   Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

   function onToggle(e) {
    const profile = e.target.parentElement;
    // we get the checkbox type
    const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
    // if the chechbox is true we do this if it not we are not doing anything
    if (isActive) {
        const infoDiv = profile.querySelector('div');
        // if the button is showing 'show more' change the style and textContent to 'Hide it'
        if (e.target.textContent == 'Show more') {
            infoDiv.style.display = 'block';
            e.target.textContent = 'Hide it';
        } else {
        // else it will be 'Hide it change it to 'Show more' and change the style to '' so it will dissapear
            infoDiv.style.display = '';
            e.target.textContent = 'Show more';
        }
    }
   }

}