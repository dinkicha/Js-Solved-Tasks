const validator = require('validator');
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
        if (validator.isEmail(req.body.email) == false) {
    throw new Error('Invalid email address');

        }
        if (req.body.username === '' || req.body.password === '') { 
    throw new Error('All fields are required');
        }
        if (req.body.password.length < 5) {
            throw new Error("Password must be at least 5 characters long");
        }
        if (req.body.password != req.body.repass) {
            throw new Error("Passwords don\'t match");
        }
        const token = await register(req.body.email, req.body.username, req.body.password);
        res.cookie('token', token);
        res.redirect('/');

    } catch(error) {
        console.log(error);
        const errors = parseError(error);
        
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                email: req.body.email,
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
     const token = await login(req.body.email, req.body.password);

     res.cookie('token', token);
     res.redirect('/') //Промени на изпита ако трябва
    } catch (error) {
        const errors = parseError(error);
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                email: req.body.email
            }
        });
    }
})

module.exports = authController;