const baseDatabase = require('./base.service.database')

module.exports = class userDatabaseService extends baseDatabase{
    async select(user){
        let parameters = []
        for(let parameter in user){
            if(parameter != undefined)
                parameters.push(`${parameter} = '${user[parameter]}' `)
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

        const sqlQuery = `SELECT * FROM USERS WHERE ${parameters.toString()}`.replace(',', '')

        return this._select(sqlQuery)
    }
}