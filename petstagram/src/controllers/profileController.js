const router = require("express").Router();
const { hasUser } = require("../middlewares/guards");
const petService = require('../services/petService');

router.get('/', hasUser(), async(req, res) => {
    let photos = await petService.getUserPosts(res.user._id);
    res.render('profile', { photos });
});

module.exports = router;