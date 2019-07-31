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

    app.put('/recruiter', validate({body: recruiterSchema()}), authService.authorize('recruiter'), async (req, res)=>{
        try {
            const recruiter = req.body
            await recruiterService.updateRecruiterInDatabase(recruiter)
            res.status(200).send({
                message: 'Recruiter updated successfully'
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })

    app.delete('/recruiter', authService.authorize('recruiter'), async (req, res)=>{
        try {
            const recruiter = req.body
            await recruiterService.deleteRecruiterFromDatabase(recruiter)
            res.status(200).send({
                message: 'Recruiter deleted successfully'
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })
}