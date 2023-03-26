import { createOrphanages } from "./api/orphanages.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let createTemplate = (onCreate) => html` 
<section @submit=${onCreate} id="create-page" class="auth">
<form id="create">
    <h1 class="title">Create Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title">
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description">
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl">
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address">
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone">
    </article>

    <input type="submit" class="btn submit" value="Create Post">
</form>
</section>   
`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHadler(onCreate)));

    async function onCreate({title, description, imageUrl, address, phone}) {
        if (title === '' || description === '' || imageUrl === '' || address === '' || phone === '') {
            return alert('All fields are required');
        }
    await createOrphanages({title, description, imageUrl, address, phone});
    ctx.page.redirect('/');
    }
}