import { deleteOrphanagesById, getOrpanagesById } from "./api/orphanages.js";
import { html, nothing } from "./lib.js";

let detailsTemplate = (orphanages, user, isOwner, canDonate, onDelete) => html`
<section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${orphanages.imageUrl} class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${orphanages.title}</h2>
                        <p class="post-description">Description: ${
                          orphanages.description
                        }</p>
                        <p class="post-address">Address: ${orphanages.address}</p>
                        <p class="post-number">Phone number: ${orphanages.phone}</p>
                        <p class="donate-Item">Donate Materials: 0</p>

                       
                    </div>
                </div>
            </div>
        </section>
`;

export async function showDetails(ctx) {
  let orphanages = await getOrpanagesById(ctx.params.id);
  let user = ctx.userData;
  let isOwner = user && orphanages._ownerId === user._id;
  let canDonate = user && orphanages._ownerId != user._id;
  ctx.render(detailsTemplate(orphanages, user, isOwner, canDonate, onDelete));
  async function onDelete() {
    let canDelete = confirm('Are you sure you want to delete this?');
    if (canDelete) {
      await deleteOrphanagesById(orphanages._id);
      ctx.page.redirect("/");
    }
  }
}
