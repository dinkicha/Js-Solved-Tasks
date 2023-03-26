import { getUserTheaters } from "./api/theater.js";
import { html } from "./lib.js";
import { getUserData } from "./utils.js";

let profileTemplate = (user, theaters) => html`<section id="profilePage">
  <div class="userInfo">
    <div class="avatar">
      <img src="./images/profilePic.png" />
    </div>
    <h2>${user.email}</h2>
  </div>
  <div class="board">
    ${theaters.length > 0
      ? html`<div class="eventBoard">${theaters.map(eventTemplate)}</div>`
      : html`<div class="no-events">
          <p>This user has no events yet!</p>
        </div>`}
  </div>
</section>`;

let eventTemplate = (theater) => html` <div class="event-info">
  <img src=${theater.imageUrl} />
  <h2>${theater.title}</h2>
  <h6>${theater.date}</h6>
  <a href="/details/${theater._id}" class="details-button">Details</a>
</div>`;

export async function showProfile(ctx) {
  let user = getUserData();
  let theaters = await getUserTheaters(user._id);

  ctx.render(profileTemplate(user, theaters));
}
