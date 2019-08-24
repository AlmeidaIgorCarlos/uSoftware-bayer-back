const vacancySchema = require('./../schemas/vacancy.schema')
const vacancyService = require('../services/vacancy.service')
const authService = require('./../services/auth.service')

const { Validator } = require('express-json-validator-middleware');
const validate = new Validator({ allErrors: true }).validate

module.exports = app => {
    app.get('/vacancy', validate({ body: vacancySchema() }), authService.authorize('recruiter'),async (req, res) => {
        try {
        
        } catch (error) {
        
        } finally {
            res.end()
        }
    })

    app.get('/vacancy/:vacancy_id', async (req, res) => {
        try {

        } catch (error) {
        
        } finally {
            res.end()
        }
    })

    app.post('/vacancy',
        validate({ body: vacancySchema(['job', 'quantity', 'recruiter_id', 'description']) }),
        authService.authorize('recruiter'),
        async (req, res) => {
            try {
                const vacancy = req.body
                const newVacancy = await vacancyService.saveVacancyInDatabase(vacancy)

                res
                    .status(200)
                    .send({
                        message: 'Vacancy saved into database correctly',
                        vacancy: newVacancy
                    })
            } catch (error) {
                res
                    .status(500)
                    .send({
                        message: error.message
                    })
            } finally {
                res.end()
            }
        }
    )

    app.put('/vacancy', validate({ body: vacancySchema() }), authService.authorize('recruiter'), async (req, res) => {
        try {
        
        } catch (error) {
        
        } finally {
            res.end()
        }
    })

    app.delete('/vacancy', validate({ body: vacancySchema([]) }), async (req, res) => {
        try {

        } catch (error) {
        
        } finally {
            res.end()
        }
    })
}