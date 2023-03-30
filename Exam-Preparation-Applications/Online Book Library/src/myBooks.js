import { getUserBooks } from "./api/books.js";
import { html } from "./lib.js";
import { getUserData } from "./utils.js";

let profileTemplate = (user, books) => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length > 0
      ? html` <ul class="my-books-list">
          ${books.map(eventTemplate)}
        </ul>`
      : html` <p class="no-books">No books in database!</p> `}
  </section>
`;

let eventTemplate = (books) => html`
  <li class="otherBooks">
    <h3>${books.title}</h3>
    <p>Type: ${books.type}</p>
    <p class="img"><img src=${books.imageUrl} /></p>
    <a class="button" href="/details/${books._id}">Details</a>
  </li>
`;

export async function showProfile(ctx) {
  let user = getUserData();
  let books = await getUserBooks(user._id);

  ctx.render(profileTemplate(user, books));
}
