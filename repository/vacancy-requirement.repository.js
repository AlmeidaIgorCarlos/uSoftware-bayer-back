const baseDatabase = require('./base.repository')

module.exports = class vacancyRequirementRepository extends baseDatabase {
    // async select(vacancy) {
    //     if (vacancy == undefined) {
    //         let sqlQuery = `select * from "dbo"."vacancy" as v inner join "dbo"."recruiter" as r on v."recruiter_id" = r."recruiter_id"` 
    //         return await this.execQuery(sqlQuery)
    //     }

    //     let sqlQuery = "SELECT * FROM vacancy WHERE "
    //     const parameters = []

    //     for (let parameter in vacancy) {
    //         if (parameter != undefined)
    //             parameters.push(`${parameter} = '${vacancy[parameter]}' `)
    //     }

    //     let count = 0
    //     parameters.forEach(elemento => {
    //         if (count === 0) {
    //             count += 1
    //             sqlQuery += elemento
    //         }
    //         else
    //             sqlQuery += `and ${elemento}`
    //     })
    //     return await this.execQuery(sqlQuery)
    // }

    async insert(vacancy_requirement) {
        const sqlQuery = `INSERT INTO vacancy_requirement
            VALUES (
                1, 
                ${vacancy_requirement.requirement_id},
                ${vacancy_requirement.vacancy_id}
            )`
            
        return await this.execQuery(sqlQuery)
    }
}