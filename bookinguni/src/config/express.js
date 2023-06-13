const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('../middlewares/session');
const trimBody = require('../middlewares/trimBody');
const path = require("path");

module.exports = (app) => {
    const hbs = handlebars.create({
        extname: '.hbs'
    });

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.set('views', 'src/views');

    app.use("/static", express.static(path.resolve(__dirname, "../static")));
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(session());
    app.use(trimBody('password'));

};