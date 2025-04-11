
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("posts", "image_url", {
      type: Sequelize.BLOB,
      allowNull: false,
    });
  },
};
