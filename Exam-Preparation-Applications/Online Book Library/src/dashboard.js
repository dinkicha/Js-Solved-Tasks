import { getAllBooks } from "./api/books.js";
import { html } from "./lib.js";

let dashboard = (books) => html`
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
      ${books.length > 0
        ? books.map(booksTemplate)
        : html` <p class="no-books">No books in database!</p> `}
    </ul>
  </section>
`;

let booksTemplate = (books) => html`
  <li class="otherBooks">
    <h3>${books.title}</h3>
    <p>Type: ${books.type}</p>
    <p class="img"><img src=${books.imageUrl} /></p>
    <a class="button" href="/details/${books._id}">Details</a>
  </li>
`;

export async function showDashboard(ctx) {
  let books = await getAllBooks();
  ctx.render(dashboard(books));
}
