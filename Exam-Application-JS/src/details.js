import { deleteOrangesById, getOrangesById } from "./api/oranges.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (oranges, onDelete, canDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${oranges.imageUrl} alt="example1" />
      <p id="details-title">${oranges.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${oranges.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${oranges.nutrition}</p>
        </div>
        ${canDelete
          ? html`<div id="action-buttons">
              <a href="/edit/${oranges._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            </div>`
          : nothing}
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  let orangeId = ctx.params.id;
  let user = getUserData();
  let orange = await getOrangesById(orangeId);
  let canDelete = user && user._id == orange._ownerId;
  ctx.render(detailsTemplate(orange, onDelete,canDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteOrangesById(orangeId);
      ctx.page.redirect("/dashboard");
    }
  }
}
