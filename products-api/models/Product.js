module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  });

  Product.associate = (models) => {
    Product.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });
  }

  return Product;
};