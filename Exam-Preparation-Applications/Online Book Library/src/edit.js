import { html } from "./lib.js";
import { getBooksById, updateBooksById } from "./api/books.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (books, onEdit) => html`
<section id="edit-page" class="edit">
<form @submit=${onEdit} id="edit-form" action="#" method="">
    <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
            <label for="title">Title</label>
            <span class="input">
                <input type="text" name="title" id="title" .value=${books.title}>
            </span>
        </p>
        <p class="field">
            <label for="description">Description</label>
            <span class="input">
                <textarea name="description"
                    id="description">${books.description}</textarea>
            </span>
        </p>
        <p class="field">
            <label for="image">Image</label>
            <span class="input">
                <input type="text" name="imageUrl" id="image" .value=${books.imageUrl}>
            </span>
        </p>
        <p class="field">
            <label for="type">Type</label>
            <span class="input">
                <select id="type" name="type" .value=${books.type}>
                    <option value="Fiction" selected>Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mistery">Mistery</option>
                    <option value="Classic">Clasic</option>
                    <option value="Other">Other</option>
                </select>
            </span>
        </p>
        <input class="button submit" type="submit" .value="Save">
    </fieldset>
</form>
</section>
`;

export async function showEdit(ctx) {
  let booksId = ctx.params.id;
  let listing = await getBooksById(booksId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({
    title,
    imageUrl,
    description,
    type,
  }) {
    if (
      title == "" ||
      imageUrl == "" ||
      description == "" ||
      type == ""
    )
      return alert("All fields are required.");

    await updateBooksById(booksId, {
      title,
      imageUrl,
      description,
      type,
    });
    ctx.page.redirect("/details/" + booksId);
  }
}
