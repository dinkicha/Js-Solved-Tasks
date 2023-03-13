window.onload = function () {
  if (localStorage.getItem("accessToken")) {
    document.getElementById("user").style.display = "inline-block";
    document.getElementById("guest").style.display = "none";
    document.querySelector(".email span").textContent =
      localStorage.getItem("email");
    document.querySelector(".add").disabled = false;
  } else {
    document.getElementById("user").style.display = "none";
    document.getElementById("guest").style.display = "inline-block";
  }

  document.getElementById("logout").addEventListener("click", logoutUser);
  document.querySelector(".load").addEventListener("click", loadCatches);
  document.querySelector("form").addEventListener("submit", addCatch);
};

async function logoutUser(e) {
  e.preventDefault();
  const url = "http://localhost:3030/users/logout";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
  });
  localStorage.clear();
  window.location.href = "index.html";
}

async function loadCatches() {
    let catches = document.getElementById("catches");
    catches.innerHTML = "";
    const url = "http://localhost:3030/data/catches/";
    await fetch(url)
      .then((res) => {
        if (res.ok == false) {
          let err = res.json();
          throw err;
        }
        return res.json();
      })
      .then((data) => {
        if (!data.length) {
          let c = data;
          let div = document.createElement("div");
          div.setAttribute("class", "catch");
          div.addEventListener("click", catchAction);
          if (localStorage.length > 0 && c._ownerId == localStorage._id) {
            div.innerHTML = `
                  <label>Angler</label>
                  <input type="text" class="angler" value="${c.angler}">
                  <label>Weight</label>
                  <input type="text" class="weight" value="${c.weight}">
                  <label>Species</label>
                  <input type="text" class="species" value="${c.species}">
                  <label>Location</label>
                  <input type="text" class="location" value="${c.location}">
                  <label>Bait</label>
                  <input type="text" class="bait" value="${c.bait}">
                  <label>Capture Time</label>
                  <input type="number" class="captureTime" value="${c.captureTime}">
                  <button class="update" data-id="${c._id}">Update</button>
                  <button class="delete" data-id="${c._id}">Delete</button>
              `;
          } else {
            div.innerHTML = `
                  <label>Angler</label>
                  <input type="text" class="angler" value="${c.angler}" disabled>
                  <label>Weight</label>
                  <input type="text" class="weight" value="${c.weight}" disabled>
                  <label>Species</label>
                  <input type="text" class="species" value="${c.species}" disabled>
                  <label>Location</label>
                  <input type="text" class="location" value="${c.location}" disabled>
                  <label>Bait</label>
                  <input type="text" class="bait" value="${c.bait}" disabled>
                  <label>Capture Time</label>
                  <input type="number" class="captureTime" value="${c.captureTime}" disabled>
                  <button class="update" data-id="${c._id}" disabled>Update</button>
                  <button class="delete" data-id="${c._id}" disabled>Delete</button>
              `;
          }
          catches.appendChild(div);
          return;
        }
        data.forEach((c) => {
          let div = document.createElement("div");
          div.setAttribute("class", "catch");
          div.addEventListener("click", catchAction);
          if (localStorage.length > 0 && c._ownerId == localStorage._id) {
            div.innerHTML = `
                  <label>Angler</label>
                  <input type="text" class="angler" value="${c.angler}">
                  <label>Weight</label>
                  <input type="text" class="weight" value="${c.weight}">
                  <label>Species</label>
                  <input type="text" class="species" value="${c.species}">
                  <label>Location</label>
                  <input type="text" class="location" value="${c.location}">
                  <label>Bait</label>
                  <input type="text" class="bait" value="${c.bait}">
                  <label>Capture Time</label>
                  <input type="number" class="captureTime" value="${c.captureTime}">
                  <button class="update" data-id="${c._id}">Update</button>
                  <button class="delete" data-id="${c._id}">Delete</button>
              `;
          } else {
            div.innerHTML = `
                  <label>Angler</label>
                  <input type="text" class="angler" value="${c.angler}" disabled>
                  <label>Weight</label>
                  <input type="text" class="weight" value="${c.weight}" disabled>
                  <label>Species</label>
                  <input type="text" class="species" value="${c.species}" disabled>
                  <label>Location</label>
                  <input type="text" class="location" value="${c.location}" disabled>
                  <label>Bait</label>
                  <input type="text" class="bait" value="${c.bait}" disabled>
                  <label>Capture Time</label>
                  <input type="number" class="captureTime" value="${c.captureTime}" disabled>
                  <button class="update" data-id="${c._id}" disabled>Update</button>
                  <button class="delete" data-id="${c._id}" disabled>Delete</button>
              `;
          }
          catches.appendChild(div);
        });
      })
      .catch((err) => {
        console.log(err, err.message);
        alert(err.message);
      });
  }

async function addCatch(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let { angler, weight, species, location, bait, captureTime } =
    Object.fromEntries(formData.entries());
  if (
    angler === "" ||
    weight === "" ||
    species === "" ||
    location === "" ||
    bait === "" ||
    captureTime === ""
  ) {
    alert("All fields are required");
    return;
  }
  let url = "http://localhost:3030/data/catches/";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      angler: angler,
      weight: weight,
      species: species,
      location: location,
      bait: bait,
      captureTime: captureTime,
    }),
  })
    .then((response) => {
      if (response.ok === false) {
        let err = response.json();
        throw err;
      }
      return response.json();
    })
    .then((data) => {
      loadCatches();
    })
    .catch((err) => {
      alert(err.message);
    });
}

function catchAction(e) {
  if (e.target.tagName === "BUTTON") {
    if (e.target.textContent === "Update") {
      updateCatch(e.target.getAttribute("data-id"), e);
    } else if (e.target.textContent === "Delete") {
      deleteCatch(e.target.getAttribute("data-id"));
    }
  }
}

async function updateCatch(catchId, e) {
    let inputFields = Array.from(
        e.target.parentElement.getElementsByTagName("input")
    );
    const url = `http://localhost:3030/data/catches/${catchId}`;
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        angler: inputFields[0].value,
        weight: inputFields[1].value,
        species: inputFields[2].value,
        location: inputFields[3].value,
        bait: inputFields[4].value,
        captureTime: inputFields[5].value,
      }),
    });
  }

async function deleteCatch(catchId) {
  const url = `http://localhost:3030/data/catches/${catchId}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": localStorage.getItem("accessToken"),
    },
  })
    .then((response) => {
      if (response.ok === false) {
        let err = response.json();
        throw err;
      }
      return response.json();
    })
    .then((data) => {
      loadCatches();
    })
    .catch((err) => {
      alert(err.message);
    });
}
