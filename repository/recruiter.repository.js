const baseDatabase = require('./base.repository')

module.exports = class recruiterDatabaseService extends baseDatabase{
    async select(recruiter){
        let parameters = []
        let conditions = ''
        
        for(let parameter in recruiter){
            if(parameter != undefined)
                parameters.push(`${parameter} = '${recruiter[parameter]}' `)
        }

        let count = 0
        parameters.forEach(elemento => {
            if(count === 0){
                count += 1
                conditions += `${elemento}`
            }
            else
                conditions += `and ${elemento}`
        })

        let sqlQuery = `SELECT * FROM recruiter WHERE ${conditions}`.replace(',', '')
        return this.execQuery(sqlQuery)
    }

    async insert(recruiter){
        let parameters = []
        for(let parameter in recruiter){
            if(parameter != undefined)
                parameters.push(`'${recruiter[parameter]}'`)
        } 

        const sqlQuery = `INSERT INTO recruiter VALUES (${parameters})`

        return this.execQuery(sqlQuery)
    }
}