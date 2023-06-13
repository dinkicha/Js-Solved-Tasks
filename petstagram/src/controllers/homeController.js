const { hasUser } = require('../middlewares/guards');
const authController = require('./userController');

const homeController = require('express').Router();

//Промени го на изпита
homeController.get('/',  (req, res) => {
res.render('home', {
    title: 'Home Page',
    user: req.user
})
})


authController.get('/logout',hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
})

module.exports = homeController;
