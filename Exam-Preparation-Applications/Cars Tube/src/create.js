import { createCars } from "./api/cars.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let createTemplate = (onCreate) => html`
  <section @submit=${onCreate} id="create-listing">
    <div class="container">
      <form id="create-form">
        <h1>Create Car Listing</h1>
        <p>Please fill in this form to create an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" />

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" />

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" />

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" />

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" />

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" />

        <hr />
        <input type="submit" class="registerbtn" value="Create Listing" />
      </form>
    </div>
  </section>
`;

export function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHadler(onCreate)));

  async function onCreate({
    brand,
    model,
    description,
    year,
    imageUrl,
    price,
  }) {
    if (
      brand == "" ||
      model == "" ||
      description == "" ||
      year == "" ||
      imageUrl == "" ||
      price == ""
    ) {
      return alert("All fields are required");
    }
    year = Number(year);
    price = Number(price);
    await createCars({
      brand,
      model,
      description,
      year,
      imageUrl,
      price,
    });
    ctx.page.redirect("/listing");
  }
}
