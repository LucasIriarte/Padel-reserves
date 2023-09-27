const { Sequelize, DataTypes, UUIDV4 } = require('sequelize');
const { sequelize } = require('../database/database');


const Reserves = sequelize.define('Reserves', {
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        defaultValue:UUIDV4
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull:false
    }
})