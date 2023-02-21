const { Model, DataTypes } = require('sequelize');
const { getConfigDb } = require('../config/config');

//Publisher class model
class Publisher extends Model{}

Publisher.init(
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true, 
        },
        publisher_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: getConfigDb(),
        modelName: 'publisher_alejandro',
        timestamps: false,
    }

);

exports.Publisher = Publisher;


