import { deleteSolesById, getSolesById } from "./api/soles.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (sole, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src=${sole.imageurl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${sole.brand}</span></p>
        <p>Model: <span id="details-model">${sole.model}</span></p>
        <p>Release date: <span id="details-release">${sole.release}</span></p>
        <p>Designer: <span id="details-designer">${sole.designer}</span></p>
        <p>Value: <span id="details-value">${sole.value}</span></p>
      </div>

      ${sole.canPerformAction
        ? html`<div id="action-buttons">
            <a href="/edit/${sole._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>`
        : nothing}
    </div>
  </section>
`;

export async function showDetails(ctx) {
  let soleId = ctx.params.id;
  let user = getUserData();
  let sole = await getSolesById(soleId);

  sole.canPerformAction = user && user._id == sole._ownerId;
  ctx.render(detailsTemplate(sole, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteSolesById(soleId);
      ctx.page.redirect("/dashboard");
    }
  }
}
