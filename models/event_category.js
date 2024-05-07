module.exports=(sequelize, DataTypes)=>{
    const Event_Category = sequelize.define("Event_Category",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull: false
        },
        icon:{
            type: DataTypes.STRING(20),
            allowNull: false
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
    return Event_Category;
}