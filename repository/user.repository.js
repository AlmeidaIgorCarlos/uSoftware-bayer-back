const baseDatabase = require('./base.repository')

module.exports = class userDatabaseService extends baseDatabase {
    async select(user) {
        if (user == undefined) {
            let sqlQuery = "SELECT * FROM USERS"
            return await this.execQuery(sqlQuery)
        }

        let sqlQuery = "SELECT * FROM USERS WHERE "
        const parameters = []

        for (let parameter in user) {
            if (parameter != undefined)
                parameters.push(`${parameter} = '${user[parameter]}' `)
        }

        let count = 0
        parameters.forEach(elemento => {
            if (count === 0) {
                count += 1
                sqlQuery += elemento
            }
            else
                sqlQuery += `and ${elemento}`
        })
        return await this.execQuery(sqlQuery)
    }

    async selectByVacancyId(vacancy) {
        const sqlQuery = `select users.*, user_vacancy.*, curriculum.filecontent from users
        inner join user_vacancy on users.user_id = user_vacancy.user_id
        inner join curriculum on curriculum.user_id = users.user_id
        where user_vacancy.vacancy_id = ${vacancy.vacancy_id}`

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
