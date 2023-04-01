import { html } from "./lib.js";

let homeTemplate = () => html`
  <section id="home">
    <h1>Learn more about your favorite fruits</h1>
    <img
      src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
      alt="home"
    />
  </section>
`;

export async function showHome(ctx) {
  ctx.render(homeTemplate());
}
