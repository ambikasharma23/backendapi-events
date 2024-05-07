'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('events', [
      {
        restaurant_id: 1,
        event_name: 'Sample Event 1',
        event_image: 'sample_image1.jpg',
        city_id: 1,
        region_id: 1,
        event_description: 'This is a sample event description.',
        recurrent_type: 'weekly',
        all_day: false,
        category_id: 1,
        start_date: new Date(),
        end_date: new Date(),
        is_Recurrent: false,
        tags: 'holi',
        created_by: 'Admin',
        updated_by: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]); // Added a closing bracket here
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
