const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'lecture_24_1',
  dialect: 'mysql'
});

const buildModelProduct = require('./Product');
const Product = buildModelProduct(sequelize, DataTypes);

// Faz a mesma coisa das duas linhas de cima
// const Product = require('./Product')(sequelize, DataTypes);



Product.findAll().then(rows => console.log(rows.length))

// return Product;

module.exports = {  };