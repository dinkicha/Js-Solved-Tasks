import { deleteMusicById, getMusicById } from "./api/music.js";
import { html, nothing } from "./lib.js";

let detailsTemplate = (music, user, isOwner, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src=${music.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>
          <strong>Band:</strong><span id="details-singer">${music.singer}</span>
        </p>
        <p>
          <strong>Album name:</strong
          ><span id="details-album">${music.album}</span>
        </p>
        <p>
          <strong>Release date:</strong
          ><span id="details-release">${music.release}</span>
        </p>
        <p>
          <strong>Label:</strong><span id="details-label">${music.label}</span>
        </p>
        <p>
          <strong>Sales:</strong><span id="details-sales">${music.sales}</span>
        </p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>

      ${user != null
        ? html` <div id="action-buttons">
            ${isOwner
              ? html`<a href="/edit/${music._id}" id="edit-btn">Edit</a>
                  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
              : nothing}
            <a href="" id="like-btn">Like</a>
          </div>`
        : nothing}
    </div>
  </section>
`;

export async function showDetails(ctx) {
  let music = await getMusicById(ctx.params.id);
  let user = ctx.userData;
  let isOwner = user && music._ownerId === user._id;
  let canDonate = user && music._ownerId != user._id;
  ctx.render(detailsTemplate(music, user, isOwner, onDelete));
  async function onDelete() {
    let canDelete = confirm("Are you sure you want to delete this?");
    if (canDelete) {
      await deleteMusicById(music._id);
      ctx.page.redirect("/");
    }
  }
}
