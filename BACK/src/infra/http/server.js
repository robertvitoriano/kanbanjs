import  express, { json }  from 'express';

const app = express()

app.use(json())

app.listen(process.env.NODE_LOCAL_PORT, () => {
    console.log('My app is running')
})
