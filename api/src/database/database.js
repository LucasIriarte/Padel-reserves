import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('reservas_padel', 'postgres', 'Postgres', {
    host: 'localhost',
    dialect: 'postgres'
})