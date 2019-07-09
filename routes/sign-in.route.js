const signInSchema = require('../schema/sign-in.schema')

const {Validator} = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true})
const validate = validator.validate;

module.exports = (app)=>{
    app.post('/signin', validate({body: signInSchema()}), (req, res)=>{
        console.log('signin route')
        res.status(200).end()
    })
}