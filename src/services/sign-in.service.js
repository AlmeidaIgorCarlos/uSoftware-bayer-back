const UserDatabase = require('../repository/user.repository')
const Auth = require('./auth.service')
const user = require('../models').user

module.exports = class SignInService {
    constructor() {
        this.userDatabase = new UserDatabase(user),
            this.auth = new Auth()
    }

    async signIn(signInParameters, res) {
        try {
            const users = await this.userDatabase.getUsersByParameters(signInParameters)

            if (!user || !users.length)
                throw new Error('user not found')

            const user = users[0]
            delete user.password

            const auth = this.auth.authenticate(user)

            return auth
        } catch (error) {
            throw error
        }
    }
}