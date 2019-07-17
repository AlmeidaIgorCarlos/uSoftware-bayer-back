const signUpSchema = require('../schema/sign-up.schema')

const { Validator } = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = (app)=>{
    app.post('/signup', validate({body: signUpSchema()}), (req, res)=>{
        console.log('signup route')
        res.send(req.user)
        res.status(200).end()
    })    
}