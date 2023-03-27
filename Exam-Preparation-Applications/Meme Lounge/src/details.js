import { deleteMemesById, getMemesById } from "./api/meme.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (meme, onDelete) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        ${meme.canPerformAction
          ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
              <button
                class="button danger"
                @click=${onDelete}
                href="javascript:void(0)"
              >
                Delete
              </button>`
          : nothing}
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
  let memeId = ctx.params.id;
  let user = getUserData();
  let meme = await getMemesById(memeId);

  meme.canPerformAction = user && user._id == meme._ownerId;
  ctx.render(detailsTemplate(meme, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteMemesById(memeId);
      ctx.page.redirect("/allMemes");
    }
  }
}
