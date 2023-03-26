import { getAllCareers } from "./api/career.js";
import { html } from "./lib.js";

let dashboard = (career) => html`
  <section id="dashboard">
    <h2>Job Offers</h2>
    ${career.length > 0
      ? career.map(careerTemplate)
      : html` <h2>No offers yet.</h2>`}
  </section>
`;

let careerTemplate = (career) => html`
  <div class="offer">
    <img src=${career.imageUrl} alt="./images/example3.png" />
    <p><strong>Title: </strong><span class="title">${career.title}</span></p>
    <p><strong>Salary:</strong><span class="salary">${career.salary}</span></p>
    <a class="details-btn" href="/details/${career._id}">Details</a>
  </div>
`;

export async function showDashboard(ctx) {
  let career = await getAllCareers();
  ctx.render(dashboard(career));
}
