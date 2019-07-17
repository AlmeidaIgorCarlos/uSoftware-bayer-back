const baseDatabase = require('./base.service.database')

module.exports = class recruiterDatabaseService extends baseDatabase{
    async select(recruiter){
        let parameters = []
        for(let parameter in recruiter){
            if(parameter != undefined)
                parameters.push(`${parameter} = '${recruiter[parameter]}' `) //refactor
        }

        let count = 0
        parameters = parameters.map(elemento => {
            if(count === 0){
                count += 1
                return elemento
            }
            else
                return `and ${elemento}`
        })

        const sqlQuery = `SELECT * FROM recruiter WHERE ${parameters}`.replace(',', '')

        return this._select(sqlQuery)
    }
}