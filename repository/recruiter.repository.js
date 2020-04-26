const baseDatabase = require('./base.repository')

module.exports = class recruiterDatabaseService extends baseDatabase {
    async select(recruiter) {
        try {
            const sqlQuery = 'SELECT * FROM RECRUITER'
            if (typeof recruiter === 'undefined')
                return await this.selectByParams({}, sqlQuery)
            else return await this.selectByParams(recruiter, sqlQuery)
        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }

    async insert(recruiter) {
        try {
            let parameters = []
            for (let parameter in recruiter) {
                if (parameter != undefined)
                    parameters.push(`'${recruiter[parameter]}'`)
            }

            const sqlQuery = `INSERT INTO recruiter VALUES (${parameters})`
            return this.execQuery(sqlQuery)
        } catch (error) {
            throw new Error(`Ocurred an error during update database operation: ${error.message}`)
        }
    }

    async update(recruiter) {
        try {
            let parameters = []
            for (let parameter in recruiter) {
                if (parameter != undefined && parameter.indexOf('id') < 1)
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