require('dotenv').config() //enviroment variables -> DO NOT SHARE THE .ENV FILE!

const app = require('express')()
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')

//applying middlewares
app.use(cors())
app.use(bodyParser.json())

//applying routes
consign()
    .include('./routes')
    .into(app)

//running server
app.listen(process.env.PORT || 3000, ()=>{
    console.log('server running properly')
})