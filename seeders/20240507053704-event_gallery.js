'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('event_galleries', [
      {
        event_id: 1,
        path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PIKj4JzS7LuPKT4hhc8WdBHHSwWoxmaJvw&s',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 1,
        path: 'https://assets.telegraphindia.com/telegraph/2022/Jun/1654539874_new-project.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Add more data as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('event_galleries', null, {});
  }
};
