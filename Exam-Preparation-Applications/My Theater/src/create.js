import { createTheater } from "./api/theater.js";
import { html } from "./lib.js";
import { createSubmitHadler } from "./utils.js";

let createTemplate = (onCreate) => html`
<section @submit=${onCreate} id="createPage">
    <form class="create-form">
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>
`;

export function showCreate(ctx) {
    ctx.render(createTemplate(createSubmitHadler(onCreate)));

    async function onCreate({title, date, author, description, imageUrl}) {
        if (title === '' || date === '' || author === '' || description === '' || imageUrl === '') {
            return alert('All fields are required');
        }
    await createTheater({title, date, author, description, imageUrl});
    ctx.page.redirect('/');
    }
}