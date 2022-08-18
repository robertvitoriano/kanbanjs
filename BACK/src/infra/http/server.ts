import express, { json } from 'express';
import dotenv from "dotenv"
import db from './../../../models'
dotenv.config();

const app = express()
const port = process.env.NODE_LOCAL_PORT || 4444

app.use(json())

db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, async () => {
        console.log(`My app is running on ${port}`);
        })
    })