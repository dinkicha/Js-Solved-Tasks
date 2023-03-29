import { getAllMusic } from "./api/music.js";
import { html } from "./lib.js";

let dashboard = (music) => html`
  <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
      ${music.length > 0
        ? music.map(musicTemplate)
        : html` <h2>There are no albums added yet.</h2>`}
    </ul>
  </section>
`;

let musicTemplate = (music) => html`
  <li class="card">
    <img src=${music.imageUrl} alt="travis" />
    <p><strong>Singer/Band: </strong><span class="singer">${music.singer}</span></p>
    <p><strong>Album name: </strong><span class="album">${music.album}</span></p>
    <p>
      <strong>Sales:</strong
      ><span class="sales">${music.sales}</span>
    </p>
    <a class="details-btn" href="/details/${music._id}">Details</a>
  </li>
`;

export async function showMusicPage(ctx) {
  let music = await getAllMusic();
  ctx.render(dashboard(music));
}
