const signInSchema = require('../schema/sign-in.schema')
const signInService = require('./../services/sign-in.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = (app)=>{
    app.post('/signin', validate({body: signInSchema()}), async (req, res)=>{
        await signInService(req.body, res)
    })
}