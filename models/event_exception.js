// eventException.js

module.exports = (sequelize, DataTypes) => {
    const event_exception = sequelize.define('event_exception', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Events', 
            key: 'id',
          },
      },
      
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      day: {
        type: DataTypes.STRING,
      },
      session_id: {
        type: DataTypes.INTEGER,
        references:{
            model:'sessions',
            key:'id'
          },
      },
     
      remarks: {
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
  
   
  
    return event_exception;
  };
  