const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
     // properties of Posts model
     {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        // property for post body? 
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
     },
     {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
     }
);

module.exports = Posts;