const user = require('./../models').user

module.exports = class userDatabaseService {

    async getUsersByParameters(user) {
        try {
            const users = await user.findAll({
                where: recruiter
            })

        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }
}