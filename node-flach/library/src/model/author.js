const { Model, DataTypes } = require('sequelize');
const { getConfigDb } = require('../config');


// Author class model
class Author extends Model{}

Author.init(
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: { 
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

    },
    {
         sequelize: getConfigDb(),
         modelName: 'author_alejandro',
         timestamps: false,   
    }
);

exports.Author = Author;