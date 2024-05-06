module.exports =(sequelize, DataTypes)=>{
    const Session =sequelize.define("Session", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        session:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        event_id:{
            type: DataTypes.INTEGER,
            allowNull: false,    
            references: {
                model: 'Events',
                key: 'id',
              },
        },
        new_description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          start_time: {
            type: DataTypes.TIME,
            allowNull: false,
          },
          end_time: {
            type: DataTypes.TIME,
            allowNull: false,
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
    return Session;
}