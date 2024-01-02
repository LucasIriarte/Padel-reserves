import express from 'express';
import routes from './routes/index.js'

const app = express();

//middlewares
app.use(express.json())

app.use(function(req,res,next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.use(routes);

export default app;