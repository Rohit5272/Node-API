import express, { Request,Response } from "express";
import bodyParser from 'body-parser';
import router from "./products.js";
import logRequestMiddleware from './logger.js';

const app = express();
app.use(bodyParser.json())

app.use(logRequestMiddleware);
app.use('/api/products',router);

app.get('/',(req,res) => res.send('Hello world'))

app.listen(3000,()=> console.log(`Server is running on port 30000`))