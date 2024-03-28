

export const getBooking = async (req, res) => {
    try {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const dateFormated = `${day}/${month}/${year}`
        return res.send(dateFormated)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}