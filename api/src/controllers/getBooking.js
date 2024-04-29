

export const getBooking = async (req, res) => {
    try {
        const { payload, dateStand } = req.query
        if (payload === "advance") {
            const partsDate = dateStand.split("/")
            const dateTrue = new Date(parseInt(partsDate[2]),parseInt(partsDate[1]) -1,parseInt(partsDate[0]))
            const day = dateTrue.getDate()
            dateTrue.setDate(day+1)
            return res.json(dateTrue)
        }
        if (payload === "back") {
            const partsDate = dateStand.split("/")
            const dateTrue = new Date(parseInt(partsDate[2]),parseInt(partsDate[1]) -1,parseInt(partsDate[0]))
            const day = dateTrue.getDate()
            dateTrue.setDate(day-1)
            return res.json(dateTrue)
        }
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const fullDate = `${day}/${month}/${year}`
        return res.send(fullDate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}