let userDatabase = require('../repository/user.repository')
userDatabase = new userDatabase()

let recruiterDatabase = new require('../repository/user.repository')
recruiterDatabase = new recruiterDatabase()

const auth = require('./auth.service')

module.exports = class SignInService {
    constructor() {
        this.
    }

    async signIn(signInParameters, res) {
        try {
            await recruiterDatabase.getUsersByParameters(signInParameters)
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}