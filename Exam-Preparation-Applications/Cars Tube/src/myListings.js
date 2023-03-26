import { getUserCars } from "./api/cars.js";
import { html } from "./lib.js";
import { getUserData } from "./utils.js";

let myListingTemplate = (listings) => html` <section id="my-listings">
  <h1>My car listings</h1>
  <div class="listings">
    ${listings.length > 0
      ? listings.map(carTemplate)
      : html`<p class="no-cars">You haven't listed any cars yet.</p>`}
  </div>
</section>`;

let carTemplate = (car) => html`
  <div class="listing">
    <div class="preview">
      <img src=${car.imageUrl} />
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
      <div class="data-info">
        <h3>Year: ${car.year}</h3>
        <h3>Price: ${car.price} $</h3>
      </div>
      <div class="data-buttons">
        <a href="/details/${car._id}" class="button-carDetails">Details</a>
      </div>
    </div>
  </div>
`;

export async function showMyListings(ctx) {
  let user = getUserData();
  let cars = await getUserCars(user._id);
  ctx.render(myListingTemplate(cars));
}
