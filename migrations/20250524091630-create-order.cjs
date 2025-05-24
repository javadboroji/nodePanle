'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_id:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_price:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false
      },
      price_at_purchase:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')  
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
