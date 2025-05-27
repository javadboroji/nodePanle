'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'admin',
        title: 'ادمین',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user',
        title: 'کاربر',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'writer',
        title: 'نویسنده',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
