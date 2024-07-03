import express from 'express';
import { dbConnection } from './db/connection.js';


const app = express()

dbConnection()

app.listen(3000,()=>{
    console.log('server is running ');
})