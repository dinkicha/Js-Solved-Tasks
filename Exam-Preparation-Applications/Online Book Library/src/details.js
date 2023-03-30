import { deleteBooksById, getBooksById } from "./api/books.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (book, onDelete) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    ${book.canPerformAction ? html` <div class="actions">
    <a class="button" href="/edit/${book._id}">Edit</a>
    <a class="button" @click=${onDelete} href="javascript:void(0)">Delete</a>
    </div>
    ` : nothing}

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        <a class="button" href="#">Like</a>

        <!-- ( for Guests and Users )  -->
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: 0</span>
        </div>
        <!-- Bonus -->
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>
`;

export async function showDetails(ctx) {
  let booksId = ctx.params.id;
  let user = getUserData();
  let book = await getBooksById(booksId);

  book.canPerformAction = user && user._id == book._ownerId;
  ctx.render(detailsTemplate(book, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteBooksById(booksId);
      ctx.page.redirect("/dashboard");
    }
  }
}
