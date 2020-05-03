const User = require('../models').user

module.exports = class userDatabaseService {

    async getUsersByParameters(user) {
        try {
            const users = await User.findAll({
                where: user
            })

        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }
}