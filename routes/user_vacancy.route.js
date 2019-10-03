const userVacancyService = require('../services/user-vacancy.service')
const authService = require('./../services/auth.service')

module.exports = app => {
    app.post('/userVacancy', async (req, res) => {
        try {
            const user_vacancy = await userVacancyService.insertUserVacancy(req.body)
            res
                .status(200)
                .send(user_vacancy)
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

    //Cancelar inscrição
    app.delete('/userVacancy', async (req, res) => {
        try {
            const user_vacancy = await userVacancyService.deleteUserVacancy(req.body)
            res
                .status(200)
                .send(user_vacancy)
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

    app.put('/userVacancyHire', async (req, res) => {
        try {
            const user_vacancy = await userVacancyService.fireUserVacancy(req.body)
            res
                .status(200)
                .send(user_vacancy)
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

    app.get('/userVacancy/:id', async (req, res) => {
        try {
            let userVacancy = {user_id: req.params.id || 0}
            const user_vacancies = await userVacancyService.getUserVacancies(userVacancy)
            res
                .status(200)
                .send(user_vacancies)
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
}
