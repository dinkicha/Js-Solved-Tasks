function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     let searchText = document.getElementById('searchField');
     let rows = Array.from(document.querySelectorAll('tbody tr'));
     let text = searchText.value;

    rows.forEach(el => {
       el.className = '';
    })
     
     let filteredRows = rows.filter(el => {
      let values = Array.from(el.children);
      if(values.some(td => td.textContent.includes(text))) {
         el.className = 'select';
      }
     })
   }
}