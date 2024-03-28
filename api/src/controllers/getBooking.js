

export const getBooking = (req, res) => {
    try {
        return res.send("entrando en get booging")
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}