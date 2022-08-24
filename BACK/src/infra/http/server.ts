import express, { json, Request, Response } from 'express';
import dotenv from "dotenv"
import db from './../../../models'
import {routes} from './routes'
import cors from 'cors'
dotenv.config();

const app = express()
const port = process.env.NODE_LOCAL_PORT || 4444
app.use(cors())
app.use(json())
app.use(routes)
app.get('/',(request:Request, response:Response)=>{
  response.json({
    message:"My app is Running"
  })
})

db.sequelize.sync().then(() => {
  app.listen(port, () => {
        console.log(`My app is running on ${port}`);
        })
    })