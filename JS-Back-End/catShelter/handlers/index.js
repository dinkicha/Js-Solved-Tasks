const homeHandler = require('./home');
const staticFiles = require('./static-file');
const catHandler = require('./cat');

module.exports = [homeHandler, staticFiles, catHandler];