const express = require('express');
const expressConfig = require('./src/config/express');
const databaseConfig = require('./src/config/database');
const routesConfig = require('./src/config/routes');


start();


async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.listen(3000, () => console.log('Server listening ot port 3000'));
}