import { DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../database/database.js";

import { Reserve } from './Reserve.js'

export const User = sequelize.define('User', {
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
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
},
{
    timestamps:false
}
)

User.hasMany(Reserve, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

Reserve.belongsTo(User, {
    foreignKey: 'userId',
    targetId: 'id'
});