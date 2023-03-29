import { html } from "./lib.js";
import { getMusicById, updateMusicById } from "./api/music.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (music, onEdit) => html`
<section @submit=${onEdit} id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${music.singer}>
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${music.album}>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${music.imageUrl}>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${music.release}>
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${music.label}>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${music.sales}>

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`;

export async function showEdit(ctx) {
  let music = await getMusicById(ctx.params.id);
  ctx.render(editTemplate(music, createSubmitHadler(onEdit)));
  async function onEdit({
    singer,
    album,
    imageUrl,
    release,
    label,
    sales,
  }) {
    if (
      singer === "" ||
      album === "" ||
      imageUrl === "" ||
      release === "" ||
      label === "" ||
      sales === ""
    ) {
      return alert("All fields are required");
    }
    await updateMusicById(music._id, {
      singer,
      album,
      imageUrl,
      release,
      label,
      sales,
    });
    ctx.page.redirect("/details/" + music._id);
  }
}
