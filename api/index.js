require('dotenv').config();
const express = require('express');
const morgan = require('morgan')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'))

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})