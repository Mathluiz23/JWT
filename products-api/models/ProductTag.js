module.exports = (sequelize, DataTypes) => {
  const ProductTag = sequelize.define('ProductTag', {
  });

  ProductTag.associate = (models) => {
    // Product -> Tags
    models.Product.belongsToMany(models.Tag, {
      through: ProductTag,
      foreignKey: 'productId',
      otherKey: 'tagId',
      as: 'tags'
    });

    // Tags -> Produtos
    models.Tag.belongsToMany(models.Product, {
      through: ProductTag,
      foreignKey: 'tagId',
      otherKey: 'productId',
      as: 'products'
    });
  }


  return ProductTag;
};