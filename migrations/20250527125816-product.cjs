'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await  queryInterface.createTable('product' ,{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      sku: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'order_categories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: true,
      },
      rating:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
