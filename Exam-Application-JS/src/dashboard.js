import { getAllOranges } from "./api/oranges.js";
import { html } from "./lib.js";

let dashboard = (orange) => html`
  <h2>Fruits</h2>
  ${orange.length > 0
    ? html`<section id="dashboard">${orange.map(orangeTemplate)}</section>`
    : html`<h2>No fruit info yet.</h2>`}
`;

let orangeTemplate = (orange) => html`
  <div class="fruit">
    <img src=${orange.imageUrl} alt="example1" />
    <h3 class="title">${orange.name}</h3>
    <p class='description'>${orange.description}</p>
    <a class="details-btn" href="/details/${orange._id}">More Info</a>
  </div>
`;

export async function showDashboard(ctx) {
  let orange = await getAllOranges();
  ctx.render(dashboard(orange));
}
