import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productsRouter from './routes/product.js';

const app = express();
dotenv.config();
app.use(morgan('dev'));

app.use('/api', productsRouter);

const port = process.env.PORT || 8000

    app.listen(port, () => {
        console.log("sever is running port 4000", port);
})

    