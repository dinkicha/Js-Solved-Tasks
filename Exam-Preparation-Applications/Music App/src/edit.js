import { html } from "./lib.js";
import { getMusicById, updateMusicById } from "./api/music.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (music, onEdit) => html`
<section @submit=${onEdit} class="editPage">
<form>
    <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" .value=${music.name}>

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${music.imgUrl}>

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" .value=${music.price}>

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${music.releaseDate}>

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" .value=${music.artist}>

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" .value=${music.genre}>

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" rows="10>
                cols="10">${music.description}</textarea>

            <button class="edit-album" type="submit">Edit Album</button>
        </div>
    </fieldset>
</form>
</section>
`;

export async function showEdit(ctx) {
  let music = await getMusicById(ctx.params.id);
  ctx.render(editTemplate(music, createSubmitHadler(onEdit)));
  async function onEdit({
    name,
    imgUrl,
    price,
    artist,
    releaseDate,
    genre,
    description,
  }) {
    if (
      name === "" ||
      imgUrl === "" ||
      price === "" ||
      releaseDate === "" ||
      artist === "" ||
      genre === "" ||
      description === ""
    ) {
      return alert("All fields are required");
    }
    await updateMusicById(music._id, {
      name,
      imgUrl,
      price,
      releaseDate,
      artist,
      genre,
      description,
    });
    ctx.page.redirect("/details/" + music._id);
  }
}
