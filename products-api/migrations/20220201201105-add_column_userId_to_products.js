'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'userId', { 
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id' 
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'userId');
  }
};
