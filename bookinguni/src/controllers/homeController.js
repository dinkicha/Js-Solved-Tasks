const { getAll } = require('../services/hotelService');
const authController = require('./userController');

const homeController = require('express').Router();

//Промени го на изпита
homeController.get('/', async (req, res) => {
    const hotels = await getAll();
res.render('home', {
    title: 'Home Page',
    hotels
})
})


authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
})

module.exports = homeController;
