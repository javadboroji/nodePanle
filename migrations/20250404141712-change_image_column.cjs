'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("posts", "image_url", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

};
