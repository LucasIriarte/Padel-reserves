import app from './app.js';
import dotenv from 'dotenv'
import { botWhatsapp } from './botWhatsapp/botWhatsapp.js'
import { sequelize } from './database/database.js';
dotenv.config()


async function main(){
    try {
        const PORT = process.env.PORT
        await sequelize.sync({force:true})
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        botWhatsapp()
        app.listen(PORT,()=>{
            console.log("server is listeting on port", PORT)
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();