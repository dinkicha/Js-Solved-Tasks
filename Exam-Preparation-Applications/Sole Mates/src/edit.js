import { html } from "./lib.js";
import { getSolesById, updateSolesById } from "./api/soles.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (sole, onEdit) => html`
<section @submit=${onEdit} id="edit">
<div class="form">
  <h2>Edit item</h2>
  <form class="edit-form">
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
      .value=${sole.brand}
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
      .value=${sole.model}
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
      .value=${sole.imageUrl}
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
      .value=${sole.release}
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
      .value=${sole.designer}
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
      .value=${sole.value}
    />

    <button type="submit">post</button>
  </form>
</div>
</section>

`;

export async function showEdit(ctx) {
  let solesId = ctx.params.id;
  let listing = await getSolesById(solesId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({
    brand,
    model,
    imageUrl,
    release,
    designer,
    value,
  }) {
    if (
      brand == "" ||
      model == "" ||
      imageUrl == "" ||
      release == "" ||
      designer == "" ||
      value == ""
    )
      return alert("All fields are required.");

    await updateSolesById(solesId, {
      brand,
      model,
      imageUrl,
      release,
      designer,
      value,
    });
    ctx.page.redirect("/details/" + solesId);
  }
}
