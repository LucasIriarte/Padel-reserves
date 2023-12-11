export const postReserve = (req,res) => {
    const userName = req.query.userName
    res.send(userName)
};