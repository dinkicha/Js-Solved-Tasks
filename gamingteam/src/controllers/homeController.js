const routes = require('express').Router();

routes.get('/',  (req, res) => {
res.render('home', {
    title: 'Home Page',
    user: req.user
})
})

routes.get('/404', (req, res) => {
res.render('404');
});
module.exports = routes;
