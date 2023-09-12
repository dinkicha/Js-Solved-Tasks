const { Router } = require('express');
const { hasUser } = require('../middlewares/guards');

const animalController = require('express').Router();
const animalService = require('../services/animalService');
const { parseError } = require('../utils/parser');



animalController.get('/add',hasUser(), (req, res) => {
    res.render('create')
})

animalController.get('/',async (req, res) => {
    let animals = await animalService.getAll();
    res.render('dashboard', { animals });
})

animalController.post('/add',hasUser(), async (req, res) => {
    let animals = {name: req.body.name, image: req.body.image, years: Number(req.body.years),kind: req.body.kind,need: req.body.need, description: req.body.description, location: req.body.location, owner: req.user._id};
    try {
        if (Object.values(animals).some((v) => !v)) {
            throw new Error("All fields are required");
          }
          await animalService.create(animals);
          res.redirect('/animals');
    } catch (err) {
        res.render('create', {
            errors: parseError(err),
            body: animals
        })
    }
})

animalController.get('/:id/donation', hasUser(), async(req, res) => {
    let id = req.params.id;
    let animal = await animalService.getById(req.params.id);
    try {
        if (req.user._id === animal.owner) {
            return res.redirect('/404');
        }
        if (animal.donation?.find(u => u == req.user._id)) {
            throw new Error('You have already donated');
        }
        await animalService.donate(id, req.user._id);
        res.redirect(`/animals/${id}/details`);
    } catch (err) {
        res.render('details', {
            errors: parseError(err),
            animal
        })
    }

});

animalController.get('/:id/delete',hasUser(), async (req, res) => {
    let id = req.params.id;
    let animal = await animalService.getById(id);
    if (req.user._id != animal.owner) {
      return res.redirect('/404');
    }

    await animalService.delete(id);
    return res.redirect('/animals');
})

animalController.get('/:id/edit',hasUser(), async (req, res) => {
    let id = req.params.id;
    let animal = await animalService.getById(id);
    if (req.user._id != animal.owner) {
       return res.redirect('/404');
    }
    res.render('edit', {animal})
})

animalController.post('/:id/edit', hasUser() , async (req, res) => {
    let id = req.params.id;
    let animal = await animalService.getById(id);
    let animals = {name: req.body.name, image: req.body.image, years: Number(req.body.years),kind: req.body.kind,need: req.body.need, description: req.body.description, location: req.body.location, owner: req.user._id};
    if (req.user._id != animal.owner) {
       return res.redirect('/404');
    }
    try {
        if (Object.values(animals).some((v) => !v)) {
          throw new Error("All fields are required");
        }
        animals.donation = animal.donation;
        await animalService.update(id, animals);
        res.redirect(`/animals/${req.params.id}/details`);
      } catch (error) {
        res.render("edit", {
            animal,
            errors: parseError(error),
          });
      }
});

animalController.get('/:id/details',  async (req, res) => {
    let animal = await animalService.getById(req.params.id);
    if (req.user) {
        animal.isAuth = true;
        if (animal.owner == req.user._id) {
            animal.isCreator = true;
        } else if (!animal.donation?.find(u => u == req.user._id)){
            animal.canDonate = true;
        }
    }
    res.render('details', {
        title: 'Animal Details',
        animal
    });
});


module.exports = animalController