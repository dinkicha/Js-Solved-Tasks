import { deleteGamesById, getGamesById } from "./api/games.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (game, onDelete) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>

      <p class="text">${game.summary}</p>

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
          <!-- list all comments for current game (If any) -->
          <li class="comment">
            <p>Content: I rate this one quite highly.</p>
          </li>
          <li class="comment">
            <p>Content: The best game.</p>
          </li>
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
        <p class="no-comment">No comments.</p>
      </div>

      ${game.canPerformAction
        ? html`<div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <article class="create-comment">
      <label>Add new comment:</label>
      <form class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  </section>
`;

export async function showDetails(ctx) {
  let gameId = ctx.params.id;
  let user = getUserData();
  let game = await getGamesById(gameId);

  game.canPerformAction = user && user._id == game._ownerId;
  ctx.render(detailsTemplate(game, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteGamesById(gameId);
      ctx.page.redirect("/dashboard");
    }
  }
}
