const hotelService = require("../services/hotelService");
const { parseError } = require('../utils/parser');

const hotelController = require('express').Router();

hotelController.get('/:id/details',  async (req, res) => {
    let hotel = await hotelService.getById(req.params.id);
    if (hotel.owner == req.user._id) {
        hotel.isOwner = true;
    } else if (hotel.bookings.map(b => b.toString()).includes(req.user._id.toString())){
    hotel.isBooked = true;
    }
    res.render('details', {
        title: 'Hotel Details',
        hotel
    });
});


hotelController.get('/create',  (req, res) => {
    res.render('create')});

hotelController.post('/create', async (req, res) => {
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number(req.body.rooms),
        owner: req.user._id
    }
    
    
    try {
        if (Object.values(hotel).some(v => !v)) {
            throw new Error('All fields are required')
        }
        const result = await hotelService.create(hotel);
        res.redirect('/');
    } catch (err) {
        res.render('create', {
            title: 'Create hotel',
            body: hotel,
            errors: parseError(err)
        })
    }
})

    hotelController.get('/:id/edit', async(req, res) => {
        let hotel = await hotelService.getById(req.params.id);
        if (hotel.owner != req.user._id) {
            return res.redirect('/auth/login');
        }
        res.render('edit', {hotel})

    });

    hotelController.post('/:id/edit', async(req, res) => {
        let hotel = await hotelService.getById(req.params.id);
        if (hotel.owner != req.user._id) {
            return res.redirect('/auth/login');
        }

        const edites = {
            name: req.body.name,
            city: req.body.city,
            imageUrl: req.body.imageUrl,
            rooms: Number(req.body.rooms),
        }
        
        
        try {
            if (Object.values(edites).some(v => !v)) {
                throw new Error('All fields are required')
            }
            const result = await hotelService.update(req.params.id ,edites);
            res.redirect(`/hotel/${req.params.id}/details`);
        } catch (err) {
            res.render('edit', {
                title: 'Edit hotel',
                hotel: Object.assign(edites, {_id: req.params.id}),
                errors: parseError(err)
            })
        }
    })

    hotelController.get('/:id/delete', async(req, res) => {
        let hotel = await hotelService.getById(req.params.id);
        if (hotel.owner != req.user._id) {
            return res.redirect('/auth/login');
        }
        await hotelService.deleteById(req.params.id);
        res.redirect('/');

    });

    hotelController.get('/:id/book', async(req, res) => {
        let hotel = await hotelService.getById(req.params.id);
        try {
            if (hotel.owner == req.user._id) {
                hotel.isOwner = true;
                throw new Error('Cannot book your own hotel')
            }
            await hotelService.bookRoom(req.params.id, req.user._id);
            res.redirect(`/hotel/${req.params.id}/details`);
        } catch (err) {
            res.render('details', {
                title: 'Hotel Details',
                hotel,
                errors: parseError(err)
            })
        }
     
        

    });

module.exports = hotelController;