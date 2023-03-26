import { deleteTheaterById, getTheaterById } from "./api/theater.js";
import { html, nothing } from "./lib.js";

let detailsTemplate = (
  theater,
  user,
  isOwner,
  onDelete
) => html` <section id="detailsPage">
  <div id="detailsBox">
    <div class="detailsInfo">
      <h1>Title: ${theater.title}</h1>
      <div>
        <img src=${theater.imageUrl} />
      </div>
    </div>

    <div class="details">
      <h3>Theater Description</h3>
      <p>${theater.description}</p>
      <h4>Date: ${theater.date}</h4>
      <h4>Author: ${theater.author}</h4>
      ${user
        ? html`<div class="buttons"> 
        ${isOwner ? html`<a class="btn-edit"  href="/edit/${theater._id}"
        >Edit</a
      >
      <a class="btn-delete" @click=${onDelete} href="javascript:void(0)"
        >Delete</a
      >` : nothing}
        
        

            <a class="btn-like" href="#">Like</a>
          </div>`
        : nothing}

      <p class="likes">Likes: 0</p>
    </div>
  </div>
</section>`;

export async function showDetails(ctx) {
  let theater = await getTheaterById(ctx.params.id);
  console.log(theater);
  let user = ctx.userData;
  let isOwner = user && theater._ownerId === user._id;
  let onEdit = user && theater._ownerId != user._id;
  ctx.render(detailsTemplate(theater, user, isOwner, onDelete));
  async function onDelete() {
    await deleteTheaterById(theater._id);
    ctx.page.redirect("/");
  }
}
