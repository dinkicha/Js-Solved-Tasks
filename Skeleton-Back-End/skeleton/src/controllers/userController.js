const authController = require('express').Router();
const {register, login} = require('../services/userService');
const { parseError } = require('../utils/parser');

authController.get('/register', (req, res) => {
    //Промени на изпита
    res.render('register', {
        title: 'Register Page'
    });
})

authController.post('/register', async (req, res) => {
    try {
        if (req.body.username === '' || req.body.password === '') { 
    throw new Error('All fields are required');
        }
        if (req.body.password != req.body.repass) {
            throw new Error("Passwords don\'t match");
        }
        const token = await register(req.body.username, req.body.password);
        res.cookie('token', token);
        res.redirect('/');

    } catch(error) {
        console.log(error);
        const errors = parseError(error);
        //Промени на изпита ако трябва
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username: req.body.username
            }
        })
    }


});

authController.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page'
    });
});

authController.post('/login', async (req, res) => {
    try {
     const token = await login(req.body.username, req.body.password);

     res.cookie('token', token);
     res.redirect('/') //Промени на изпита ако трябва
    } catch (error) {
        const errors = parseError(error);
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }
})

module.exports = authController;