const userSchema = require('./../schemas/user.schema')
const userService = require('../services/user.service')
const authService = require('./../services/auth.service')

const { Validator } = require('express-json-validator-middleware');
const validate = new Validator({ allErrors: true }).validate

module.exports = app => {
    app.get('/user', validate({ body: userSchema() }), async (req, res) => {
        try {
            const users = await userService.getUsers()
            res
                .status(200)
                .send({ 'users': users })
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

    app.get('/user/:param', async (req, res) => {
        try {
            let schema
            switch (req.headers['param']) {
                case 'user_id':
                    schema = {
                        'user_id': req.params.param
                    }
                    break;
                case 'email':
                    schema = {
                        'email': req.params.param
                    }
                case 'vacancy_id':
                    schema = {
                        'vacancy_id': req.params.param
                    }
                    break;
                default:
                    throw new Error('You must provide a valid header param value')
            }
            const users = await userService.getUsers(schema)
            res
                .status(200)
                .send({ 'users': users })
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

    app.put('/user', validate({ body: userSchema(['user_id', 'name', 'lastName', 'age', 'address', 'email', 'password']) }), async (req, res) => {
        try {

        } catch (error) {

        } finally {

        }
    })

    app.delete('/user', validate({ body: userSchema(['user_id']) }), async (req, res) => {
        try {

        } catch (error) {

        } finally {

        }
    })
}