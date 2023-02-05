window.addEventListener("load", solve);
function solve() {
  const modelField = document.getElementById("model");
  const yearField = document.getElementById("year");
  const descriptionField = document.getElementById("description");
  const priceField = document.getElementById("price");
  const addBtn = document.getElementById("add");
  let tBodyFurniteList = document.getElementById("furniture-list");
  const totlaPrice = Array.from(
    document.getElementsByClassName("total-price")
  )[0];
  addBtn.addEventListener("click", addOnClick);
  let sum = 0;
  function addOnClick(e) {
    e.preventDefault();

    if (
      modelField.value === "" ||
      yearField.value === "" ||
      descriptionField.value === "" ||
      priceField.value === "" ||
      Number(yearField.value) <= 0 ||
      Number(priceField.value) <= 0
    ) {
      return;
    }

    let tr = createElement("tr", "", "info");
    let td1 = createElement("td", modelField.value);
    let td2 = createElement("td");
    let price = Number(priceField.value).toFixed(2);
    td2.textContent = price;
    let td3 = createElement("td");
    let moreButton = createElement("button", "More Info", "moreBtn");
    let buyButton = createElement("button", "Buy it", "buyBtn");
    let tr2 = createElement("tr", "", "hide");
    let td4 = createElement("td", `Year: ${yearField.value}`);
    let td5 = createElement("td", `Description: ${descriptionField.value}`);
    td5.colSpan = "3";
    tr.appendChild(td1);
    tr.appendChild(td2);
    td3.appendChild(moreButton);
    td3.appendChild(buyButton);
    tr.appendChild(td3);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tBodyFurniteList.appendChild(tr);
    tBodyFurniteList.appendChild(tr2);

    modelField.value = "";
    yearField.value = "";
    descriptionField.value = "";
    priceField.value = "";

    moreButton.addEventListener("click", moreOnClick);
    buyButton.addEventListener("click", buyOnClick);

    function moreOnClick(e) {
      if (moreButton.textContent === "More Info") {
        moreButton.textContent = "Less Info";
        tr2.style.display = "contents";
      } else {
        moreButton.textContent = "More Info";
        tr2.style.display = "none";
      }
    }

    function buyOnClick() {
      sum += Number(price);
      tr2.remove();
      tr.remove();
      let total = sum.toFixed(2);
      totlaPrice.textContent = total;
    }
  }

  function createElement(type, content, className) {
    const element = document.createElement(type);
    element.textContent = content;
    if (className) {
      element.className = className;
    }
    return element;
  }
}
