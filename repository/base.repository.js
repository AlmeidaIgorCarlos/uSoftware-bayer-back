const sql = require('mssql')

module.exports = class baseDatabase {
    async connect() {
        try {
            if (global.sqlConnection != undefined && global.sqlConnection != null)
                return global.sqlConnection
            else {
                global.sqlConnection = await sql.connect(process.env.STRING_CONNECTION)
                return global.sqlConnection
            }
        } catch (error) {
            sql.close()
            return await this.connect()
        }
    }

    async selectByParams(entity, query) {
        try {
            const connection = await this.connect()
            const request = await connection.request()
            const parameters = []
            let where = false
            let sqlQuery = query

            for (let parameter in entity) {
                if (parameter != undefined) {
                    if (!where) {
                        sqlQuery += ' WHERE '
                        where = !where
                    }
                    if (typeof entity[parameter] === 'number')
                        request.input(`${parameter}`, sql.Int, entity[parameter])
                    else request.input(`${parameter}`, sql.VarChar, entity[parameter])
                    parameters.push(`${parameter} = @${parameter} `)
                }
            }

            let count = 0
            parameters.forEach(elemento => {
                if (count === 0) {
                    count += 1
                    sqlQuery += elemento
                } else
                    sqlQuery += `and ${elemento}`
            })

            const databaseResult = await request.query(sqlQuery)
            const recordSet = databaseResult.recordset
            return recordSet
        } catch (error) {
            throw error
        }
    }
}