const vacancySchema = require('./../schemas/vacancy.schema')
const vacancyService = require('../services/vacancy.service')
const authService = require('./../services/auth.service')

const { Validator } = require('express-json-validator-middleware');
const validate = new Validator({ allErrors: true }).validate

module.exports = app => {
    app.get('/vacancy', authService.authorize('recruiter'), async (req, res) => {
        try {
            if(req.query.recruiter_id === undefined && req.query.recruiter_id === 0)
                throw new Error('no recruiter_id found')
            
            const databaseVacancies = await vacancyService.getVacancy(req.query.recruiter_id)
            res
                .status(200)
                .send(databaseVacancies)
        } catch (error) {
            res
                .status(500)
                .send({
                    message: error
                })
        } finally {
            res.end()
        }
    })

    app.post('/vacancy',
        validate({ body: vacancySchema(['job', 'recruiter_id', 'description']) }),
        authService.authorize('recruiter'),
        async (req, res) => {
            try {
                const vacancy = req.body
                const databaseVacancy = await vacancyService.saveVacancyInDatabase(vacancy)
                res
                    .status(200)
                    .send({
                        message: 'Vacancy saved into database correctly',
                        vacancy: databaseVacancy[0]
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

    app.put('/vacancy/:id',
        validate({ body: vacancySchema(['isAvaiable']) }),
        authService.authorize('recruiter'),
        async (req, res) => {
            try {
                if(req.body.isAvaiable == undefined)
                    throw new Error('No isAvaiable')

                await vacancyService.setIsAvaiableFalse({
                    vacancy_id: req.params.id,
                    isAvaiable: req.body.isAvaiable
                })

                res
                    .status(200)
                    .send({
                        message: 'vacancy updated successfully'
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
    })

    app.delete('/vacancy/:id',
        authService.authorize('recruiter'),
        async (req, res) => {
            try {
                if(req.body.isActive == undefined)
                    throw new Error('No is active')

                await vacancyService.setIsActiveFalse({
                    vacancy_id: req.params.id,
                    isActive: req.body.isActive
                })

                res
                    .status(200)
                    .send({
                        message: 'vacancy deactivated successfully'
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
    })
}