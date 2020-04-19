module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('recipients', 'complement', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {},
};
