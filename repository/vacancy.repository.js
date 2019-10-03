const baseDatabase = require('./base.repository')

module.exports = class vacancyRepository extends baseDatabase {
    async select(vacancy) {
        if (vacancy == undefined) {
            let sqlQuery = `select v.*, r.*, rr.name as requirement_name from "dbo"."vacancy" as v inner join "dbo"."recruiter" as r on v."recruiter_id" = r."recruiter_id" inner join vacancy_requirement as vr on v.vacancy_id = vr.vacancy_id inner join requirement as rr on rr.requirement_id = vr.requirement_id` 
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

    async selectAllVacancies() {
        const sqlQuery = "select * from vacancy"
        return await this.execQuery(sqlQuery)
    }

    async insert(vacancy) {
        let sqlQuery = `INSERT INTO vacancy
            VALUES (
                '${vacancy.job}', 
                '${vacancy.isAvaiable ? 1 : 0}',
                '${vacancy.isActive ? 1 : 0}',
                '${vacancy.recruiter_id}',
                '${vacancy.description}'
            )`

        await this.execQuery(sqlQuery)
    
        sqlQuery = 'select top 1 * from vacancy order by vacancy_id desc'
        
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