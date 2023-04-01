import { createOranges } from "./api/oranges.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let createTemplate = (onCreate) => html`
<section @submit=${onCreate} id="create">
<div class="form">
  <h2>Add Fruit</h2>
  <form class="create-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Fruit Name"
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      placeholder="Fruit Image"
    />
    <textarea
    id="fruit-description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
  ></textarea>
  <textarea
    id="fruit-nutrition"
    name="nutrition"
    placeholder="Nutrition"
    rows="10"
    cols="50"
  ></textarea>
    <button type="submit">Add Fruit</button>
  </form>
</div>
</section>
`;

export function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHadler(onCreate)));

  async function onCreate({
    name,
    imageUrl,
    description,
    nutrition,
  }) {
    if (
      name == "" ||
      imageUrl == "" ||
      description == "" ||
      nutrition == ""
    ) {
      return alert("All fields are required");
    }
    
    await createOranges({
    name,
    imageUrl,
    description,
    nutrition,
    });
    ctx.page.redirect("/dashboard");
  }
}
