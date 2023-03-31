import { getAllSoles } from "./api/soles.js";
import { html } from "./lib.js";

let dashboard = (soles) => html`
  <section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
      ${soles.length > 0
        ? soles.map(soleTemplate)
        : html` <h2>There are no items added yet.</h2> `}
    </ul>
  </section>
`;

let soleTemplate = (soles) => html`
  <li class="card">
    <img src=${soles.imageUrl} alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${soles.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${soles.model}</span></p>
    <p><strong>Value:</strong><span class="value">${soles.value}</span>$</p>
    <a class="details-btn" href="/details/${soles._id}">Details</a>
  </li>
`;

export async function showDashboard(ctx) {
  let soles = await getAllSoles();
  ctx.render(dashboard(soles));
}
