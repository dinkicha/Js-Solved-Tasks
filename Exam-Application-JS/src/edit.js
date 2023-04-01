import { html } from "./lib.js";
import { getOrangesById, updateOranges } from "./api/oranges.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (oranges, onEdit) => html`
<section @submit=${onEdit} id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value=${oranges.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value=${oranges.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${oranges.description}
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${oranges.nutrition}
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;

export async function showEdit(ctx) {
  let orangeId = ctx.params.id;
  let listing = await getOrangesById(orangeId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({
    name,
    imageUrl,
    description,
    nutrition,
    salary,
  }) {
    if (
      name == "" ||
      imageUrl == "" ||
      description == "" ||
      nutrition == "" 
    )
      return alert("All fields are required.");

    await updateOranges(orangeId, {
      name,
      imageUrl,
      description,
      nutrition,
    });
    ctx.page.redirect("/details/" + careerId);
  }
}
