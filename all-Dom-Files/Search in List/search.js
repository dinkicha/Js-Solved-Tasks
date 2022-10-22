function search() {
    let userWord = document.getElementById('searchText').value;
    let towns = Array.from(document.querySelectorAll('#towns li'));
    let match = document.getElementById('result');
    let counter = 0;

    for (let town of towns) {
       if(town.textContent.includes(userWord)){
          town.style.fontWeight = 'bold'
          town.style.textDecoration = 'underline'
          counter++;
       }else{
          town.style.fontWeight = 'normal'
          town.style.textDecoration = 'none'
 
       }
    }
    
    match.textContent = `${counter} matches found`
 }