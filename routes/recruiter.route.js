const recruiterSchema = require('./../schemas/recruiter.schema')
const recruiterService = require('../services/recruiter.service')
const authService = require('./../services/auth.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = app => {
    app.post('/recruiter', validate({body: recruiterSchema()}), authService.authorize('recruiter'), async (req, res)=>{
        try {
            const recruiter = req.body
            const savedRecruiter = await recruiterService.saveRecruiterInDatabase(recruiter)
            res.status(200).send({
                message: 'Recruiter saved successfully',
                recruiter: {...savedRecruiter[0]}
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })

    app.put('/recruiter', validate({body: recruiterSchema()}), (req, res)=>{
        try {
            
        }catch (error) {
            
        }finally{
            
        }
    })
}