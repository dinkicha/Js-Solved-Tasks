import { getAllOrphanages } from "./api/orphanages.js";
import { html } from "./lib.js";

let dashboard = (orphanages) => html`<section id="dashboard-page">
<h1 class="title">All Posts</h1>
<div class="all-posts">
${
  orphanages.length > 0
    ? orphanages.map(orphanageTemplate)
    : html`<h1 class="title no-posts-title">No posts yet!</h1>`
}
</div>
</section>`;

let orphanageTemplate = (orphanages) => html`
  <div class="post">
    <h2 class="post-title">${orphanages.title}</h2>
    <img class="post-image" src=${orphanages.imageUrl} alt="Kids clothes" />
    <div class="btn-wrapper">
      <a href="/details/${orphanages._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

export async function showDashboard(ctx) {
  let orphanages = await getAllOrphanages();
  ctx.render(dashboard(orphanages));
}
