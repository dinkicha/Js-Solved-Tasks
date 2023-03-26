import { createGames } from "./api/games.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let createTemplate = (onCreate) => html`
<section @submit=${onCreate} id="create-page" class="auth">
<form id="create">
    <div class="container">

        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title...">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category...">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game">
    </div>
</form>
</section>
`;

export function showCreate(ctx) {
  ctx.render(createTemplate(createSubmitHadler(onCreate)));

  async function onCreate({
    title,
    category,
    maxLevel,
    imageUrl,
    summary,
  }) {
    if (
      title == "" ||
      category == "" ||
      maxLevel == "" ||
      imageUrl == "" ||
      summary == "" 
    ) {
      return alert("All fields are required");
    }
    
    await createGames({
      title,
      category,
      maxLevel,
      imageUrl,
      summary,
    });
    ctx.page.redirect("/");
  }
}
