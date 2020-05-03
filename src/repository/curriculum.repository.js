const baseDatabase = require('./base.repository')
    // const sql = require('mssql')

module.exports = class curriculumDatabaseService extends baseDatabase {

    constructor() {
        super()
            // this.connect().then(connection => this.connection = connection)
    }

    async select(curriculum) {
        const request = await this.connection.request()

        if (curriculum == undefined) {
            let sqlQuery = "SELECT * FROM CURRICULUM"
            const databaseResult = await request.query(sqlQuery)
            const recordSet = databaseResult
            return recordSet
        }

        let sqlQuery = "SELECT * FROM CURRICULUM WHERE "
        const parameters = []

        for (let parameter in curriculum) {
            if (parameter != undefined) {
                if (typeof curriculum[parameter] === 'number')
                    request.input(`${parameter}`, sql.Int, curriculum[parameter])
                else request.input(`${parameter}`, sql.VarChar, curriculum[parameter])
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
    }

    async selectByUserId(curriculum) {
        const sqlQuery = `
        select * from curriculum as 'curriculums'
        inner join user
        on curriculums.user_id = user.user_id
        where user.user_id  = @user_id
        and user.isActive = 1`

        const request = this.connect.request()
        request.input('user_id', Sql.Int, curriculum.user_id)

        const databaseResult = await request.query(sqlQuery)
        const recordSet = databaseResult.recordset

        return recordSet
    }

    async insert(curriculum) {
        try {
            const sqlQuery = 'INSERT INTO CURRICULUM (content, isActive, user_id) VALUES (@content, 1, @user_id)'

            const request = this.connection.request()
            request.input('content', sql.VarChar, curriculum.content)
            request.input('user_id', sql.Int, curriculum.user_id)

            const databaseResult = await request.query(sqlQuery)
            const recordSet = databaseResult.recordset

            return recordSet
        } catch (error) {
            throw error
        }
    }

    async delete(curriculum) {
        const sqlQuery = `UPDATE CURRICULUM SET isActive = 0 WHERE curriculum_id = @curriculum_id`

        const request = this.connection.request()
        request.input('curriculum_id', sql.Int, curriculum.curriculum_id)

        const databaseResult = await request.query(sqlQuery)
        const recordSet = databaseResult.recordset

        return recordSet
    }
}