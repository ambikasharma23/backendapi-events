module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define('Events', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_image: {
        type: DataTypes.STRING,
      },
      city_id: {
        type: DataTypes.INTEGER,
      },
      region_id: {
        type: DataTypes.INTEGER,
      },
      event_description: {
        type: DataTypes.TEXT,
      },
      recurrent_type: {
        type: DataTypes.ENUM('daily', 'weekly', 'monthly', 'yearly'),
      },
      all_day: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      is_Recurrent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      tags: {
        type: DataTypes.ENUM('holi', 'music', 'live', 'DJ'),
        allowNull: true, // Change to false if required
      },
      created_by: {
        type: DataTypes.STRING,
      },
      updated_by: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    });
  
    return Events;
  };
  