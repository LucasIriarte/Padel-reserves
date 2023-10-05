import app from './app.js';
import { sequelize } from './database/database.js';

import './models/Reserve.js';
import './models/User.js';


async function main(){
    try {
        await sequelize.sync({force:true})
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(3000);
        console.log("server is listeting on port", 3000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();