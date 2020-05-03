const JWT = require('jsonwebtoken')

module.exports = {
    async authenticate(info) {
        return new Promise((resolve, reject)=>{
            JWT.sign(info, process.env.TOKEN_SECRET, {expiresIn: 360000}, (err, data)=> {
                if(err) reject(err.message)
                else resolve(data)
            })
        })
    },
    authorize(role) {
        return [
            (req, res, next)=>{
                if(role === req.user.role)
                    next()
                else
                    throw new Error('User has no permission to access this functionality')
            }
        ]
    }
}