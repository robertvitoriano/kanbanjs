import  express, { json }  from 'express';
import dotenv from "dotenv"
import db from './../../../models'
dotenv.config();

const app = express()

app.use(json())

//@ts-ignore
db.sequelize.sync({force:true}).then(()=>{
    app.listen(process.env.NODE_LOCAL_PORT, async() => {
        console.log('My app is running');
    })
})
