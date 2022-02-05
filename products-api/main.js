const { User, Product, ProductTag, Tag } = require('./models');

const main = async () => {
  // const tag = await Tag.create({ name: 'promoção'});

  // const product = await Product.findByPk(3, {
  //   include: [
  //     { model: User, as: 'owner' },
  //     { model: Tag, as: 'tags' }
  //   ]
  // });
  // console.log(product.toJSON());
  // const tags = await product.getTags();
  // console.log(tags);

  const tag = await Tag.findByPk(1, {
    include: { model: Product, as: 'products' }
  });
  // const products = await tag.getProducts();
  console.log(tag.toJSON());

  
  // await ProductTag.create({ productId: product.id, tagId: tag.id });
}

main();

