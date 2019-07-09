const signUpSchema = require('../schema/sign-up.schema')

const { Validator, ValidationError } = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true})
const validate = validator.validate;

module.exports = (app)=>{
    app.post('/signup', validate({body: signUpSchema()}), (req, res)=>{
        console.log('signup route')
        res.status(200).end()
    })

    //Refactor
    app.use((err, req, res, next)=>{
        if (err instanceof ValidationError) {
            res.status(400).send('invalid');
            next();
        }
        else next(err);
    });
}