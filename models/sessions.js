module.exports =(sequelize, DataTypes)=>{
    const session =sequelize.define("session", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        session:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        event_id:{
            type: DataTypes.INTEGER,
            allowNull: false,    
            references: {
                model: 'events',
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
            defaultValue: DataTypes.NOW 
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'updated_at',
            defaultValue: DataTypes.NOW 
          },
        
    });
    return session;
}