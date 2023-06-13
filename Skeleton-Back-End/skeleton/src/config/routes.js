const homeController = require("../controllers/homeController");
const authController = require("../controllers/userController");


module.exports = (app) => {
    app.use('/', homeController)
    app.use('/auth', authController);

};