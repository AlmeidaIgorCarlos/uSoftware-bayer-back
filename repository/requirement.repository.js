const baseDatabase = require('./base.repository')

module.exports = class requirementDatabaseService extends baseDatabase {
    async select(requirement) {
        let sqlQuery = "SELECT * FROM requirement"

        if (requirement !== undefined && requirement.name !== undefined) {
            sqlQuery += ` WHERE name = '${requirement.name}' and isActive = 1`
            return await this.execQuery(sqlQuery)
        }else{
            sqlQuery += ` WHERE isActive = 1`
            return await this.execQuery(sqlQuery)
        }
    }

    async insert(requirement) {
        const sqlQuery = `INSERT INTO REQUIREMENT
        values ('${requirement.name}', ${requirement.isRequired}, ${requirement.isActive})`

        console.log(sqlQuery)
        return await this.execQuery(sqlQuery)
    }
}