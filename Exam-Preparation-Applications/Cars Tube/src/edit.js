import { html } from "./lib.js";
import { getCarsById, updateCarsById } from "./api/cars.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (cars, onEdit) => html`
  <section @submit=${onEdit} id="edit-listing">
    <div class="container">
      <form id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr />

        <p>Car Brand</p>
        <input
          type="text"
          placeholder="Enter Car Brand"
          name="brand"
          .value=${cars.brand}
        />

        <p>Car Model</p>
        <input
          type="text"
          placeholder="Enter Car Model"
          name="model"
          .value=${cars.model}
        />

        <p>Description</p>
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          .value=${cars.description}
        />

        <p>Car Year</p>
        <input
          type="number"
          placeholder="Enter Car Year"
          name="year"
          .value=${cars.year}
        />

        <p>Car Image</p>
        <input
          type="text"
          placeholder="Enter Car Image"
          name="imageUrl"
          .value=${cars.imageUrl}
        />

        <p>Car Price</p>
        <input
          type="number"
          placeholder="Enter Car Price"
          name="price"
          .value=${cars.price}
        />

        <hr />
        <input type="submit" class="registerbtn" value="Edit Listing" />
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
  let carId = ctx.params.id;
  let listing = await getCarsById(carId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({ brand, model, description, year, imageUrl, price }) {
    if (
      brand == "" ||
      model == "" ||
      description == "" ||
      Number(year) == "" ||
      imageUrl == "" ||
      price == ""
    )
      return alert("All fields are required.");
      year = Number(year);
      price = Number(price);

    await updateCarsById(carId, {
      brand,
      model,
      description,
      year,
      imageUrl,
      price,
    });
    ctx.page.redirect("/details/" + carId);
  }
}
