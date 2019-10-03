const requirementSchema = require('./../schemas/requirement.schema')
const requirementService = require('../services/requirement.service')
const authService = require('./../services/auth.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = app => {
    app.get('/requirement', validate({body: requirementSchema()}), authService.authorize('recruiter'), async (req, res)=>{
        try {
            const requirement = {name: req.query.name}
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

    app.post('/requirement', authService.authorize('recruiter'), async (req, res)=>{
        try {
            const requirements = req.body
            const savedRequirements = await requirementService.saveRequirementInDatabase(requirements)
            
            res.status(200).send({
                message: 'Requirement saved successfully',
                requirements: savedRequirements
            })
        }catch (error) {
            console.log(error)
            res.status(400).send({message: error.message})
        }finally{
            res.end()
        }
    })
}