import { createProvider, createFlow, createBot, addKeyword, MemoryDB } from '@bot-whatsapp/bot'
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys'
import dotenv from 'dotenv'

dotenv.config()
const PORT_BAILEYS = process.env.PORT_BAILEYS
const flowBienvenida = addKeyword("hello").addAnswer("Hello, welcome, we are a padel court, to reserve an appointment you can access our page http://localhost:5173/home")

export async function botWhatsapp(){
    const provider = createProvider(BaileysProvider)

    provider.initHttpServer(PORT_BAILEYS)

    provider.http?.server.post('/send-message', handleCtx(async (bot, req, res) => {
        const { phoneNumber, userName, dateAppointment, shiftStart, shiftEnd } = req.body
        await bot.sendMessage(`549${phoneNumber}`, `Hello ${userName}, this message is to remind you that your shift is on ${dateAppointment} from ${shiftStart} to ${shiftEnd}. Remember, if you need to cancel the shift, you must do so 24 hours in advance.`, {})
        res.end("This is a message sended from polka server")
    }))

    await createBot({
        flow: createFlow([flowBienvenida]),
        database: new MemoryDB(),
        provider
    })
}