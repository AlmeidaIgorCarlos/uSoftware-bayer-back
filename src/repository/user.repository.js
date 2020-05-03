module.exports = class userDatabaseService {
    constructor(
        user
    ) {
        this.user = user
    }

    async getUsersByParameters(user) {
        try {
            let { dataValues } = await this.user.findAll({
                where: user
            })

            if (!dataValues || !dataValues.length)
                throw new Error('users not found')

            return dataValues
        } catch (error) {
            if (error.message === 'users not found')
                return []

            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }
}