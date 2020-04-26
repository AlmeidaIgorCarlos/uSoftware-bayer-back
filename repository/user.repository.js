const baseDatabase = require('./base.repository')

module.exports = class userDatabaseService extends baseDatabase {
    async select(recruiter) {
        try {
            const sqlQuery = 'SELECT * FROM USERS'
            if (typeof recruiter === 'undefined')
                return await this.selectByParams({}, sqlQuery)
            else return await this.selectByParams(recruiter, sqlQuery)
        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }

    async selectByVacancyId(vacancy) {
        const sqlQuery = `
        select users.* from user as 'users'
        inner join user_vacancy
        on user.user_id = user_vacancy.user_id 
        where user_vacancy.vacancy_id = ${vacancy.id}
        and users.isActive = 1`

        return await this.execQuery(sqlQuery)
    }

    async insert(user) {
        const sqlQuery = `INSERT INTO USERS
            (name, lastName, mobilePhone, email, isActive, password)
            VALUES ('${user.name}', '${user.lastName}',
             '${user.mobilePhone}', '${user.email}', '1', '${user.password}')`

        return await this.execQuery(sqlQuery)
    }

    async update(user) {
        const sqlQuery = `UPDATE USERS SET name = '${user.name}', lastName = '${user.lastName}', 
        mobilePhone = '${user.mobilePhone}', email = '${user.email}', isActive = '1', password = '${user.password}'
        WHERE user_id = '${user.user_id}'`

        return await this.execQuery(sqlQuery, true)
    }

    async delete(user) {
        const sqlQuery = `UPDATE USERS SET isActive = '0'
        WHERE user_id = '${user.user_id}'`

        return await this.execQuery(sqlQuery, true)
    }
}