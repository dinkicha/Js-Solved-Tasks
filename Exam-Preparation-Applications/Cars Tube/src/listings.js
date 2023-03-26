import { getAllCars } from "./api/cars.js";
import { html } from "./lib.js";

let listings = (cars) => html`   <section id="car-listings">
<h1>Car Listings</h1>
<div class="listings">
    ${cars.length > 0 ? cars.map(carsTemplate) : html`<p class="no-cars">No cars in database.</p>`}
</div>
</section>`;

let carsTemplate = (cars) => html`
<div class="listing">
        <div class="preview">
            <img src= ${cars.image}>
        </div>
        <h2>${cars.brand} ${cars.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${cars.year}</h3>
                <h3>Price: ${cars.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${cars._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

export async function showListings(ctx) {
  let cars = await getAllCars();
  console.log(cars);
  ctx.render(listings(cars));
}
