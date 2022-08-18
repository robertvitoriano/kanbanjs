import express, { json, Request, Response } from 'express';
import dotenv from "dotenv"
import db from './../../../models'
import {routes} from './routes'
dotenv.config();

const app = express()
const port = process.env.NODE_LOCAL_PORT || 4444

app.use(json())
app.use(routes)
app.get('/',(request:Request, response:Response)=>{
  response.json({
    message:"My app is Running"
  })
})
db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, async () => {
        console.log(`My app is running on ${port}`);
        })
    })