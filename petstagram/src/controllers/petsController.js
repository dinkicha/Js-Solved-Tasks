const { Router } = require('express');
const { hasUser } = require('../middlewares/guards');

const petsController = require('express').Router();
const petService = require('../services/petService');
const { parseError } = require('../utils/parser');

petsController.get('/add',hasUser(), (req, res) => {
    res.render('create')
})

petsController.get('/',async (req, res) => {
    let photos = await petService.getAll().populate('owner');
    res.render('catalog', { photos });
})

petsController.get('/:id/details', async (req, res) => {
    let photoId = req.params.id;
    let photo = await petService.getPostComments(photoId);

    if (req.user?.username == photo.owner.username) {
        photo.isCreator = true;
    }
    
    if (req.user && req.user.username != photo.owner.username) {
        photo.canComment = true;
    }

    res.render('details', { photo })
});

petsController.get('/:id/delete',hasUser(), async (req, res) => {
    let photoId = req.params.id;
    let photo = await petSerivice.getById(photoId);
    if (req.user._id != photo.owner) {
        res.redirect('/auth/login');
    }

    await petService.deleteById(photoId);
    res.redirect('/pets')
})

petsController.get('/:id/edit',hasUser(), async (req, res) => {
    let photoId = req.params.id;
    let photo = await petSerivice.getById(photoId);
    if (req.user._id != photo.owner) {
        res.redirect('/auth/login');
    }
    res.render('edit', {photo})
})

petsController.get('/:id/edit',hasUser(), async (req, res) => {
    let photoId = req.params.id;
    let photo = await petSerivice.getById(photoId);
    if (req.user._id != photo.owner) {
        res.redirect('/auth/login');
    }
    res.render('edit', {photo})
})

petsController.post('/:id/edit', hasUser() , async (req, res) => {
    let photoId = req.params.id;
    let photo = await petSerivice.getById(photoId);
    let photoData = {name: req.body.name, image: req.body.image, age: Number(req.body.age), description: req.body.description, location: req.body.location, owner: photo.owner};
   
    if (req.user._id != photo.owner) {
        res.redirect('/auth/login');
    }

    try {
        if (Object.values(photoData).some((v) => !v)) {
          throw new Error("All fields are required");
        }
    
        await petService.update(photoId, photoData);
        res.redirect(`/pets/${req.params.id}/details`);
      } catch (error) {
        res.render("edit", {
            photo: photoData,
            errors: parseError(error),
          });
      }
});

petsController.post('/add',hasUser(), async (req, res) => {
    let photoData = {name: req.body.name, image: req.body.image, age: Number(req.body.age), description: req.body.description, location: req.body.location, owner: req.user._id};
    try {
        if (Object.values(photoData).some((v) => !v)) {
            throw new Error("All fields are required");
          }
          await petService.create(photoData);
          res.redirect('/pets');
    } catch (err) {
        res.render('create', {
            errors: parseError(err),
            body: photoData
        })
    }
})


module.exports = petsController;