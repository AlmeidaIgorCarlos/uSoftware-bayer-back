const recruiterSchema = require('./../schemas/recruiter.schema')
const recruiterService = require('../services/recruiter.service')
const authService = require('./../services/auth.service')

const {Validator} = require('express-json-validator-middleware');
const validate = new Validator({allErrors: true}).validate

module.exports = app => {
    app.get('/recruiter/:id',async (req, res) => {
        try {
            let recruiter = {recruiter_id: req.params.id || 0}
            const recruiters = await recruiterService.getRecruiterFromDatabase(recruiter)

            res
                .status(200)
                .send({ 'recruiter': recruiters[0] })
        } catch (error) {
            res
                .status(500)
                .send({
                    'message': error.message
                })
        } finally {
            res.end()
        }
    })

    app.get('/recruiter', async (req, res) => {
        try {
            let recruiters = await recruiterService.getRecruiterFromDatabase()
            res.status(200).send({
                message: "successful recruiters",
                recruiters: recruiters
            })
        } catch (error) {
            res.status(500).send({ message: error.message })
        } finally {
            res.end()
        }
    })
}