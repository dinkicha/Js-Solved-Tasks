import { getAllGames } from "./api/games.js";
import { html } from "./lib.js";

let dashboard = (game) => html`
  <section id="catalog-page">
    <h1>All Games</h1>
    ${game.length > 0
      ? game.map(gameTemplate)
      : html` <h3 class="no-articles">No articles yet</h3> `}
  </section>
`;

let gameTemplate = (game) => html`
<div class="allGames">
<div class="allGames-info">
    <img src=${game.imageUrl}
    <h6>${game.action}</h6>
    <h2>${game.title}</h2>
    <a href="/details/${game._id}" class="details-button">Details</a>
</div>
`;

export async function showDashboard(ctx) {
  let game = await getAllGames();
  ctx.render(dashboard(game));
}
