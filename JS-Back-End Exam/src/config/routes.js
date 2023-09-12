const homeController = require("../controllers/homeController");
const authController = require("../controllers/userController");
const animalController = require("../controllers/animalController");

module.exports = (app) => {
    app.use('/', homeController)
    app.use('/auth', authController);
    app.use('/animals', animalController);
};