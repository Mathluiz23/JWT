const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const middlewares = require('./middlewares');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(bodyParser.json());



app.use('/users', userController);

app.use(authMiddleware);

app.use('/products', productController);



app.use(middlewares.joiError);
app.use(middlewares.domainError);
app.use(middlewares.serverError);

module.exports = app;
