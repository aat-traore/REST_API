const express =require('express')
const cors = require('cors')
const mongoose =require('mongoose')
const app = express()
const routes = require('./routes/routeUser')
//const port = process.env.PORT
require ('dotenv').config()
app.use(cors())
app.use(express.json())
app.use('/api',routes)
mongoose.connect(process.env.DATA_URL)
.then(() => console.log('Server connected'))
.catch(() =>console.log('failure connexion'))

app.listen(8000, ()=>{
    console.log('Server started at 8000')
})

