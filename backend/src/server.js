import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import clientsRouter from './routes/clients.js';

//load of files to EV
dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("API WORKING...");
})

//routes
app.use('/clients',clientsRouter);


//start server
const PORT=process.env.PORT||3306;
app.listen(PORT,()=>{
    console.log(`server initialize on http://localhost:${PORT}`);
})
