'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ticket_inventories', [{
     ticket_id:1,
     quantity: 20,
     created_at: new Date(),
     updated_at: new Date()
    },
    {
      ticket_id:2,
      quantity: 30,
      created_at: new Date(),
      updated_at: new Date()
     },
     {
      ticket_id:3,
      quantity: 30,
      created_at: new Date(),
      updated_at: new Date()
     }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
