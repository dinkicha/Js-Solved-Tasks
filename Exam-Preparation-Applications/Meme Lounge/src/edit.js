import { html } from "./lib.js";
import { getMemesById, updateMemesById } from "./api/meme.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (meme, onEdit) => html`
<section @submit=${onEdit} id="edit-meme">
            <form id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" 
                    .value=${meme.description}>
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" .value="Edit Meme">
                </div>
            </form>
        </section>
`;

export async function showEdit(ctx) {
  let memeId = ctx.params.id;
  let listing = await getMemesById(memeId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({
    title,
    imageUrl,
    description,
   
  }) {
    if (
      title == "" ||
      imageUrl == "" ||
      description == ""
    )
      return alert("All fields are required.");

    await updateMemesById(memeId, {
      title,
      imageUrl,
      description,
    });
    ctx.page.redirect("/details/" + memeId);
  }
}
