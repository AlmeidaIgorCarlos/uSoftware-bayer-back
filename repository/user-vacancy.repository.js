const baseDatabase = require('./base.repository')

module.exports = class userVacancyRepository extends baseDatabase {
    async select(userVacancy) {
        if (userVacancy == undefined) {
            let sqlQuery = "SELECT * FROM user_vacancy"
            return await this.execQuery(sqlQuery)
        }

        let sqlQuery = "SELECT * FROM user_vacancy WHERE "
        const parameters = []

        for (let parameter in userVacancy) {
            if (parameter != undefined)
                parameters.push(`${parameter} = '${userVacancy[parameter]}' `)
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

    async insert(user_vacancy) {
        const sqlQuery = `INSERT INTO user_vacancy
            VALUES (
                ${user_vacancy.isDismissed ? 1 : 0}, 
                ${user_vacancy.isActive ? 1 : 0},
                '${user_vacancy.approvalRate}',
                '${user_vacancy.user_id}',
                '${user_vacancy.vacancy_id}',
                ${user_vacancy.isHired ? 1 : 0}
            )`

        return await this.execQuery(sqlQuery)
    }

    async hireCandidate(user_vacancy) {
        const sqlQuery = `UPDATE user_vacancy
        SET isHired = ${user_vacancy.isHired ? 1 : 0} 
        WHERE user_vacancy_id = ${user_vacancy.user_vacancy_id}`
        
        return await this.execQuery(sqlQuery, true)
    }
}
