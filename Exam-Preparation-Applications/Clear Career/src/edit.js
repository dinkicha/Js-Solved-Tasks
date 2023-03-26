import { html } from "./lib.js";
import { getCareersById, updateCareersById } from "./api/career.js";
import { createSubmitHadler } from "./utils.js";

let editTemplate = (careers, onEdit) => html`
  <section @submit=${onEdit} id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form class="edit-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
          .value=${careers.title}
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
          .value=${careers.imageUrl}
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
          .value=${careers.category}
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
          .value=${careers.description}
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
          .value=${careers.requirements}
        ></textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
          .value=${careers.salary}
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function showEdit(ctx) {
  let careerId = ctx.params.id;
  let listing = await getCareersById(careerId);
  ctx.render(editTemplate(listing, createSubmitHadler(onEdit)));

  async function onEdit({
    title,
    imageUrl,
    category,
    description,
    requirements,
    salary,
  }) {
    if (
      title == "" ||
      imageUrl == "" ||
      category == "" ||
      description == "" ||
      requirements == "" ||
      salary == ""
    )
      return alert("All fields are required.");

    await updateCareersById(careerId, {
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary,
    });
    ctx.page.redirect("/details/" + careerId);
  }
}
