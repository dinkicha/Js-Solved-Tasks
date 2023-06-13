const { hasUser } = require('../middlewares/guards');
const { getByUserBooking } = require('../services/hotelService');

const profileController = require('express').Router();


profileController.get('/', hasUser(), async (req, res) => {
    const bookings = await getByUserBooking(req.user._id)
    res.render('profile', {
        title: 'Profile page',
        user: req.user, bookings
    })
});

    module.exports = profileController;
