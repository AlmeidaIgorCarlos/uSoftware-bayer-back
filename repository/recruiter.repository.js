const baseDatabase = require('./base.repository')

module.exports = class recruiterDatabaseService extends baseDatabase{
    async select(recruiter){
        try {
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
        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }

    async insert(recruiter){
        try {
            let parameters = []
            for(let parameter in recruiter){
                if(parameter != undefined)
                    parameters.push(`'${recruiter[parameter]}'`)
            } 

            const sqlQuery = `INSERT INTO recruiter VALUES (${parameters})`
            return this.execQuery(sqlQuery)
        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)            
        }
    }

    async update(recruiter){
        try {
            let parameters = []
            for(let parameter in recruiter){
                if(parameter != undefined && parameter.indexOf('id') < 1)
                    parameters.push(`${parameter} = '${recruiter[parameter]}'`)
            } 
    
            const sqlQuery = `UPDATE recruiter SET ${parameters} WHERE recruiter_id = ${recruiter.recruiter_id}`
            const result = await this.execQuery(sqlQuery, true)
            return result[0]
        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }
}