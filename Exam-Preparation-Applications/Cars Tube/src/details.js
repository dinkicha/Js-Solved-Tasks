import { deleteCarsById, getCarsById } from "./api/cars.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (car, onDelete) => html`
<section id="listing-details">
<h1>Details</h1>
<div class="details-info">
    <img src=${car.imageUrl}>
    <hr>
    <ul class="listing-props">
        <li><span>Brand:</span>${car.brand}</li>
        <li><span>Model:</span>${car.model}</li>
        <li><span>Year:</span>${car.year}</li>
        <li><span>Price:</span>${car.price}$</li>
    </ul>

    <p class="description-para">${car.description}</p>

    ${car.canPerformAction ? html` <div class="listings-buttons">
    <a href="/edit/${car._id}" class="button-list">Edit</a>
    <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
</div>` : nothing}
</div>
</section>
`;

export async function showDetails(ctx) {
    let carId = ctx.params.id;
    let user = getUserData();
    let car = await getCarsById(carId);
  
    car.canPerformAction = user && user._id == car._ownerId;
    ctx.render(detailsTemplate(car, onDelete));
  
    async function onDelete() {
      let deletePost = confirm("Are you sure you want to delete?");
      if (deletePost) {
        await deleteCarsById(carId);
        ctx.page.redirect("/listing");
      }
    }
  }