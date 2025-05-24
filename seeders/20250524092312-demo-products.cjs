'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        id: uuidv4(),
        title: 'Product 1',
        description: 'Description 1',
        price: 100,
        image_url: 'http://example.com/image1.jpg',
        count: 10,
        is_active: true,
        sku: 'SKU001',
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Product 2',
        description: 'Description 2',
        price: 150,
        image_url: 'http://example.com/image2.jpg',
        count: 5,
        is_active: true,
        sku: 'SKU002',
        createdAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Product 10',
        description: 'Description 10',
        price: 250,
        image_url: 'http://example.com/image10.jpg',
        count: 15,
        is_active: true,
        sku: 'SKU010',
        createdAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
