let userDatabase = new require('../repository/user.repository')
userDatabase = new userDatabase()

module.exports = {
    async getUsers(schema) {
        if (schema.vacancy_id != undefined)
            return await userDatabase.selectByVacancyId(schema)

        return await userDatabase.select(schema)
    }
}