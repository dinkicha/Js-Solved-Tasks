const homeController = require('express').Router();
const animalService = require('../services/animalService');


homeController.get('/', async (req, res) => {
let threeAnimals = (await animalService.getAll()).slice(-3);
res.render('home', {
    title: 'Home Page',
    user: req.user,
    threeAnimals,
})
})


module.exports = homeController;
