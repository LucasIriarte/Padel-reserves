import { DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../database/database";



sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.STRING,
        allowNull: true
    }
})