import { deleteCareersById, getCareersById } from "./api/career.js";
import { html, nothing } from "./lib.js";
import { getUserData } from "./utils.js";

let detailsTemplate = (career, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${career.imageUrl} alt="example1" />
      <p id="details-title">${career.title}</p>
      <p id="details-category">
        Category: <span id="categories">${career.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${career.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${career.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${career.requirements}</span>
        </div>
      </div>
      <p>Applications: <strong id="applications">1</strong></p>

      ${career.canPerformAction ? html`<div id="action-buttons">${career.canPerformAction
              ? html` <a href="/edit/${career._id}" id="edit-btn">Edit</a>
                  <a
                    @click=${onDelete}
                    href="javascript:void(0)"
                    id="delete-btn"
                    >Delete</a
                  >`
              : nothing}
            <a href="" id="apply-btn">Apply</a>
          </div>`
        : nothing}
    </div>
  </section>
`;

export async function showDetails(ctx) {
  let carId = ctx.params.id;
  let user = getUserData();
  let car = await getCareersById(carId);

  car.canPerformAction = user && user._id == car._ownerId;
  ctx.render(detailsTemplate(car, onDelete));

  async function onDelete() {
    let deletePost = confirm("Are you sure you want to delete?");
    if (deletePost) {
      await deleteCareersById(carId);
      ctx.page.redirect("/dashboard");
    }
  }
}
