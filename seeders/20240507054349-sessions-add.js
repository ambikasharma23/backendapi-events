"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sessions",
      [
        {
          session: "Morning",
          event_id: 1,
          new_description: "Sample description for morning",
          start_time: "09:00:00",
          end_time: "12:00:00",
          created_by: "Admin",
          updated_by: "Admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
