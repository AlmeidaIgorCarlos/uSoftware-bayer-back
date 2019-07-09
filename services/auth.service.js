require('dotenv').config()
const JWT = require('jsonwebtoken')

module.exports = {
    async authenticate(info) {
        JWT.sign(info, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_EXPIRES_IN}, (err, data)=> {
            if(err) return err.message
            else return data
        })
    },
    authorize(req, res, next) {
        const token = req.query.token || req.body.token || req.header('x-token')

        if(!token) res.status(401).end('No token provided')
        else{
            JWT.verify(token, process.env.SECRET, (err, data) => {
                if (err) res.status(401).end(err.message)
                else next()
            })
        }
    }
}