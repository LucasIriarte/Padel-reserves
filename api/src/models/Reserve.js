import { Sequelize, DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '../database/database.js';


export const Reserve = sequelize.define('Reserve', {
    id: {
        type: DataTypes.UUID,
        allowNull:false,
        defaultValue:UUIDV4,
        primaryKey:true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    dateAppointment: {
        type:DataTypes.STRING,
        allowNull:false
    },
    shiftStart: {
        type: DataTypes.TIME,
        allowNull:false
    },
    shiftEnd: {
        type: DataTypes.TIME,
        allowNull:false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull:false
    }
})