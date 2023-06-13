const homeController = require("../controllers/homeController");
const authController = require("../controllers/userController");
const petsController = require("../controllers/petsController");
const profileController = require("../controllers/profileController");

module.exports = (app) => {
    app.use('/', homeController)
    app.use('/auth', authController);
    app.use('/pets', petsController);
    app.use('/profile', profileController);
};