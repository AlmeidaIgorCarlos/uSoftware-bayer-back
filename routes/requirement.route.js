const requirementSchema = require('./../schemas/requirement.schema')
const requirementService = require('../services/requirement.service')
const authService = require('./../services/auth.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = app => {
    app.get('/requirement', validate({body: requirementSchema()}), authService.authorize('recruiter'), async (req, res)=>{
        try {
            const requirement = req.body
            const databaseRequirements = await requirementService.getRequirementFromDatabase(requirement)
            res.status(200).send({
                data: [...databaseRequirements]
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })

    app.post('/requirement', validate({body: requirementSchema()}), authService.authorize('recruiter'), async (req, res)=>{
        try {
            const requirement = req.body
            const savedRequirement = await requirementService.saveRequirementInDatabase(requirement)
            res.status(200).send({
                message: 'Requirement saved successfully',
                requirement: {...savedRequirement[0]}
            })
        }catch (error) {
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })
}