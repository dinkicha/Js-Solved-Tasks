window.addEventListener("load", solve);

function solve() {
  let inputFields = Array.from(document.getElementsByTagName("input"));
  const publishButton = document.getElementById("publish");
  let profit = 0;

  publishButton.addEventListener("click", onPreview);

  function onPreview(e) {
    e.preventDefault();
    let [make, model, productionYear ,originalCost, sellingPrice] =inputFields.map(
    (e) => `${e.value}`);

    let fuelInfo = document.getElementById("fuel");
    let fuelInfoIndex = fuelInfo.selectedIndex // DON'T FORGET ANYMORE

    if (
      make == "" ||
      model == "" ||
      productionYear == "" ||
      originalCost == "" ||
      sellingPrice == "" ||
      Number(sellingPrice) < Number(originalCost)
    ) {
      return;
    }

    let formBody = document.getElementById('table-body');
    let tr = document.createElement('tr');
    tr.setAttribute('class', 'row');
    tr.innerHTML = `<td>${make}</td><td>${model}</td><td>${productionYear}</td><td>${fuelInfo.options[fuelInfo.selectedIndex].value}</td><td>${originalCost}</td><td>${sellingPrice}</td>`;

    let td = document.createElement('td');

    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'action-btn edit');
    editButton.textContent = 'Edit';

    let actionButton = document.createElement('button');
    actionButton.setAttribute('class', 'action-btn sell');
    actionButton.textContent = 'Sell';

    
    td.appendChild(editButton);
    td.appendChild(actionButton);
    tr.appendChild(td);
    formBody.appendChild(tr);

    editButton.addEventListener('click', editing);
    actionButton.addEventListener('click', action);

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
    fuelInfo.selectedIndex = - 1;
    
    function editing() {
      let inputInfo = [make, model, productionYear, originalCost, sellingPrice];
      for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = inputInfo[i];
      }
      fuelInfo.selectedIndex = fuelInfoIndex;
      tr.remove();
    }

    function action() {
      let list5 = document.getElementById('cars-list');
      let li = document.createElement('li');
      li.setAttribute('class', 'each-list');
      li.innerHTML = `<span>${make} ${model}</span><span>${productionYear}</span><span>${sellingPrice - originalCost}</span>`;
      list5.appendChild(li);
      let money = document.getElementById('profit');
      profit += sellingPrice - originalCost;
      money.textContent = profit.toFixed(2);
      tr.remove();

        }
  }
}
