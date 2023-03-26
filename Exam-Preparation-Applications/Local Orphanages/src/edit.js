import { html } from "./lib.js";
import { getOrpanagesById, updateOrphanagesById } from "./api/orphanages.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (orphanages, onEdit) => html`
  <section @submit=${onEdit} id="edit-page" class="auth">
    <form id="edit">
      <h1 class="title">Edit Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input
          type="title"
          name="title"
          id="title"
          .value=${orphanages.title}
        />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs </label>
        <input
          type="text"
          name="description"
          id="description"
          .value=${orphanages.description}
        />
      </article>

      <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          .value=${orphanages.imageUrl}
        />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input
          type="text"
          name="address"
          id="address"
          .value=${orphanages.address}
        />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" .value=${orphanages.phone} />
      </article>

      <input type="submit" class="btn submit" .value="Edit Post" />
    </form>
  </section>
`;

export async function showEdit(ctx) {
  let orphanages = await getOrpanagesById(ctx.params.id);
  ctx.render(editTemplate(orphanages, createSubmitHadler(onEdit)));
  async function onEdit({ title, description, imageUrl, address, phone }) {
    if (
      title === "" ||
      description === "" ||
      imageUrl === "" ||
      address === "" ||
      phone === ""
    ) {
      return alert("All fields are required");
    }
    await updateOrphanagesById(orphanages._id, {
      title,
      description,
      imageUrl,
      address,
      phone,
    });
    ctx.page.redirect("/details/" + orphanages._id);
  }
}
