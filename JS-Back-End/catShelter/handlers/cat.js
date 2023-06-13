const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds");
const cats = require("../data/cats");
const globalPath = "../../../JS-Back-End/catShelter/";

function loadHtml(filePath, res) {
  fs.readFile(filePath, (err, pageRec) => {
    if (err) {
      console.log(err);
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.write("Server responded with 404");
      res.end();
      return;
    }

    if (filePath.includes("addCat.html")) {
      let catBreeds = breeds.map(
        (breed) => `<option value="${breed}">${breed}</option>`
      );
      pageRec = pageRec.toString().replace("{{catBreeds}}", catBreeds);
    }

    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(pageRec);
    res.end();
  });
}

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));

    loadHtml(filePath, res);
  } else if (pathname === "/cats/add-breed" && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/addBreed.html")
    );
    loadHtml(filePath, res);
  } else if (pathname === "/cats/add-breed" && req.method === "POST") {
    let formData = "";

    req.on("data", (data) => {
      formData += data;
    });
    req.on("end", () => {
      let body = qs.parse(formData);

      fs.readFile("../data/breeds.json", (err, data) => {
        if (err) {
          throw err;
        }

        let cats = JSON.parse(data);
        cats.push(body.breed);
        let json = JSON.stringify(cats);

        fs.writeFile("../data/breeds.json", json, "utf-8", () => {
          console.log("Cat added successfully");
        });
      });

      res.writeHead(302, { location: "/" });
      res.end();
    });
  } else if (pathname === "/cats/add-cat" && req.method === "POST") {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        throw err;
      }
      let oldPath = files.upload.filepath;
      let newPath = path.normalize(
        path.join(globalPath, "content/images/" + files.upload.originalFilename)
      );
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          throw err;
        }
        console.log("Files were saved successfully");
      });
      fs.readFile("../data/cats.json", "utf-8", (err, data) => {
        if (err) throw err;

        let cats = JSON.parse(data);
        cats.push({
          id: cats.length + 1,
          ...fields,
          image: files.upload.originalFilename,
        });
        let json = JSON.stringify(cats);
        fs.writeFile("../data/cats.json", json, () => {
          res.writeHead(302, { location: "/" });
          res.end();
        });
      });
    });
  } else {
    return true;
  }
};
