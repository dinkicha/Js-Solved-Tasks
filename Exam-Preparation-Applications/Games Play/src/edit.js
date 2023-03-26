import { html } from "./lib.js";
import { getGamesById, updateGamesById } from "./api/games.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (game, onEdit) => html`
<section @submit=${onEdit} id="edit-page" class="auth">
            <form id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${game.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${game.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${game.summary}></textarea>
                    <input class="btn submit" type="submit" .value="Edit Game">

                </div>
            </form>
        </section>

`;

export async function showEdit(ctx) {
  let gameId = ctx.params.id;
  let listing = await getGamesById(gameId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({
    title,
    imageUrl,
    category,
    maxLevel,
    summary
  }) {
    if (
      title == "" ||
      imageUrl == "" ||
      category == "" ||
      maxLevel == "" ||
      summary == "" 
    )
      return alert("All fields are required.");

    await updateGamesById(gameId, {
      title,
      imageUrl,
      category,
      maxLevel,
    summary
    });
    ctx.page.redirect("/details/" + gameId);
  }
}
