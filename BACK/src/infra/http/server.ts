import express, { json } from 'express';
import dotenv from "dotenv"
import db from './../../../models'
import { users } from './../../../seeders/users'
import { cards } from './../../../seeders/cards'
dotenv.config();

const app = express()
const port = process.env.NODE_LOCAL_PORT || 4444

const createUsers = () => {
    const userPromises = users.map(user => {
        return db.user.create(user)
    })
    return Promise.all(userPromises)
}
const createCards = () => {
    const cardPromises = cards.map(card => {
        return db.card.create(card)
    })
    return Promise.all(cardPromises)
}

app.use(json())

db.sequelize.sync({ force: true }).then(() => {
    app.listen(port, async () => {
        console.log(`My app is running on ${port}`);
        await createUsers()
        await createCards()
    })
})
