const signInSchema = require('../schemas/sign-in.schema')
const signInService = require('./../services/sign-in.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = (app)=>{
    app.post('/signin', validate({body: signInSchema()}), async (req, res)=>{
        try {
            const signInParameters = req.body
            const signIn = await signInService(signInParameters)
            if(signIn)
                res.status(200).send({token: signIn})
            else
                res.status(404).send({message: 'User or recruiter with the provided information not found'})
        } catch (error) {
            res.status(404).send({message: error.message})            
        }finally{
            res.end()
        }
    })
}