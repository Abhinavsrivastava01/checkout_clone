import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import cors from 'cors'
import Router from './routes/route.js';
import bodyParser from 'body-parser';
const app=express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);

const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWARD=process.env.DB_PASSWARD;
Connection(USERNAME,PASSWARD);
app.listen(PORT,()=>console.log(`server running succesfully on port ${PORT}`))
DefaultData();