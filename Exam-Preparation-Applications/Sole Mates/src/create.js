import { createSoles } from "./api/soles.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let createTemplate = (onCreate) => html`
<section @submit=${onCreate} id="create">
<div class="form">
  <h2>Add item</h2>
  <form class="create-form">
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>

`;

export function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHadler(onCreate)));

  async function onCreate({
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
    ) {
      return alert("All fields are required");
    }
    
    await createSoles({
      brand,
      model,
      imageUrl,
      release,
      designer,
      value,
    });
    ctx.page.redirect("/dashboard");
  }
}
