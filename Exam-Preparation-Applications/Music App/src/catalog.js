import { getAllMusic } from "./api/music.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let dashboard = (music, user) => html`
  <section id="catalogPage">
    <h1>All Albums</h1>
    ${music.length > 0
      ? music.map((e) => musicTemplate(e, user))
      : html`<p>No Albums in Catalog!</p>`}
  </section>
`;

let musicTemplate = (music, user) => html`
  <div class="card-box">
    <img src=${music.imgUrl} />
    <div>
      <div class="text-center">
        <p class="name">Name: ${music.name}</p>
        <p class="artist">Artist: ${music.artist}</p>
        <p class="genre">Genre: ${music.genre}</p>
        <p class="price">Price: $${music.price}</p>
        <p class="date">Release Date: ${music.releaseDate}</p>
      </div>
      ${user ? html`<div class="btn-group">
      <a href="/details/${music._id}" id="details">Details</a>
    </div>` : nothing}
    </div>
  </div>
`;

export async function showCatalog(ctx) {
  let music = await getAllMusic();
  let user = getUserData();
  ctx.render(dashboard(music, user));
}
