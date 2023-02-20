const { Model, DataTypes } = require('sequelize');
const { getConfigDb } = require('../config');

class Book extends Model{}

Book.init({
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true, 
    },
    book_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    book_edition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: { 
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
},
{
    sequelize: getConfigDb(),
    modelName: 'book_alejandro',
    timestamps: false,
}
);

