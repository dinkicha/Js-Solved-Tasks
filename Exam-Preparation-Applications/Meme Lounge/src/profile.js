import { getUserMemes } from "./api/meme.js";
import { html } from "./lib.js";
import { getUserData } from "./utils.js";

let profileTemplate = (user, meme) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      <img id="user-avatar-url" alt="user-profile" src="/images/female.png"/>
      <div class="user-content">
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>My memes count: ${meme.length}</p>
      </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    ${meme.length > 0
      ? html`<div class="user-meme-listings">${meme.map(eventTemplate)}</div>`
      : html`<p class="no-memes">No memes in database.</p>`}
  </section>
`;

let eventTemplate = (meme) => html`
  <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
    <a class="button" href="/details/${meme._id}">Details</a>
  </div>
`;

export async function showProfile(ctx) {
  let user = getUserData();
  let memes = await getUserMemes(user._id);

  ctx.render(profileTemplate(user, memes));
}
