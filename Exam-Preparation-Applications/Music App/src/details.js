import { deleteMusicById, getMusicById } from "./api/music.js";
import { html, nothing } from "./lib.js";

let detailsTemplate = (music, user, isOwner, onDelete) => html`
  <section id="detailsPage">
    <div class="wrapper">
      <div class="albumCover">
        <img src=${music.imgUrl} />
      </div>
      <div class="albumInfo">
        <div class="albumText">
          <h1>Name: Melodrama</h1>
          <h3>Artist: ${music.artist}</h3>
          <h4>Genre: ${music.genre}</h4>
          <h4>Price: $${music.price}</h4>
          <h4>Date: ${music.releaseDate}</h4>
          <p>Description: ${music.description}</p>
        </div>
        ${user != null
          ? html` <div class="actionBtn">
              ${isOwner
                ? html`<a href="/edit/${music._id}" class="edit"
                      >Edit</a
                    >
                    <a
                      @click=${onDelete}
                      href="javascript:void(0)"
                      class="remove"
                      >Delete</a
                    >`
                : nothing}
            </div>`
          : nothing}
      </div>
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
