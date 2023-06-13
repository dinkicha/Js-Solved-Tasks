const authController = require("express").Router();
const { isGuest } = require("../middlewares/guards");
const { register, login } = require("../services/userService");
const { parseError } = require("../utils/parser");

authController.get("/register", isGuest(), (req, res) => {
  res.render("register");
});

authController.post("/register",isGuest(), async (req, res) => {
  try {
    if (
      req.body.username === "" ||
      req.body.password === "" ||
      req.body.email === ""
    ) {
      throw new Error("All fields are required");
    }
    if (req.body.password != req.body.repass) {
      throw new Error("Passwords don't match");
    }
    const token = await register(
      req.body.username,
      req.body.email,
      req.body.password
    );
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    //Промени на изпита ако трябва
    res.render("register", {
      title: "Register Page",
      errors,
      body: {
        username: req.body.username,
        email: req.body.email
      },
    });
  }
});

authController.get("/login",isGuest(), (req, res) => {
  res.render("login")
});

authController.post("/login",isGuest(), async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "")
      throw new Error("All fields are required");

    const token = await login(req.body.username, req.body.password);

    res.cookie("token", token);
    res.redirect("/"); 
  } catch (error) {
    const errors = parseError(error);
    res.render("login", {
      title: "Login Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

module.exports = authController;
