'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Bs', 'aID', {
      type: Sequelize.INTEGER,
	  references: {
          model: 'As',
          key: 'id'
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bs', 'aID')
  }
};
