const baseDatabase = require('./base.repository')

module.exports = class vacancyRepository extends baseDatabase {
    async select(vacancy) {
        if (vacancy == undefined) {
            let sqlQuery = "SELECT * FROM vacancy"
            return await this.execQuery(sqlQuery)
        }

        let sqlQuery = "SELECT * FROM vacancy WHERE "
        const parameters = []

        for (let parameter in vacancy) {
            if (parameter != undefined)
                parameters.push(`${parameter} = '${vacancy[parameter]}' `)
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

    async insert(vacancy) {
        const sqlQuery = `INSERT INTO vacancy
            VALUES (
                '${vacancy.job}', 
                '${vacancy.isAvaiable ? 1 : 0}',
                '${vacancy.isActive ? 1 : 0}',
                '${vacancy.recruiter_id}',
                '${vacancy.description}'
            )`

        return await this.execQuery(sqlQuery)
    }

    async update(vacancy) {
        const sqlQuery = `UPDATE vacancy
            SET JOB = '${vacancy.job}', 
            isAvaliable = ${vacancy.isAvaiable},
            isActive = ${vacancy.isActive},
            recruiter_id = '${vacancy.recruiter_id}',
            description = '${vacancy.description}'
            WHERE vacancy_id = ${vacancy.vacancy_id}`

        return await this.execQuery(sqlQuery, true)
    }

    async delete(vacancy) {
        const sqlQuery = `UPDATE vacancy
            SET isAvaiable = '0',
            WHERE vacancy_id = '${vacancy.vacancy_id}'
        )`

        return await this.execQuery(sqlQuery, true)
    }
}