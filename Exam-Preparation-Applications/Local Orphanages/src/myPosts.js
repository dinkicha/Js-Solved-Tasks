import { getUserOrphanages } from "./api/orphanages.js";
import { html } from "./lib.js";
import { getUserData } from "./utils.js";

let profileTemplate = (user, orphanages) => html`<section id="my-posts-page">
  <h1 class="title">My Posts</h1>
  ${orphanages.length > 0
    ? html` <div class="my-posts">${orphanages.map(eventTemplate)}</div>`
    : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section> `;

let eventTemplate = (orphanages) => html` <div class="post">
                    <h2 class="post-title">${orphanages.title}</h2>
                    <img class="post-image" src=${orphanages.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${orphanages._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
            </div>
`;

export async function showProfile(ctx) {
  let user = getUserData();
  let orphanages = await getUserOrphanages(user._id);

  ctx.render(profileTemplate(user, orphanages));
}
