require('dotenv').config() //enviroment variables

const app = require('express')()
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')
const {ValidationError} = require('express-json-validator-middleware');
const expressJWT = require('express-jwt')

//applying middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(expressJWT({
    secret: process.env.TOKEN_SECRET,
    getToken: (req) => req.headers['token'] || req.query.token || req.body.token
}).unless({path: ['/signin', '/signup']}))

//applying routes
consign()
    .include('./routes')
    .into(app)


//Este middleware faz o tratamento de erro de schema, tem que ser o último
app.use((err, req, res, next)=>{
    if (err instanceof ValidationError) {
        console.log(err.validationErrors)
        res.status(400).send({message: 'Invalid schema'});
        next();
    }
    else next(err);
})

//running server
app.listen(process.env.PORT || 3000, ()=>{
    console.log('server running properly')
})

//TODO - Tratamento de erros