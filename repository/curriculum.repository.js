const baseDatabase = require('./base.repository')

module.exports = class curriculumDatabaseService extends baseDatabase {
    async select(curriculum) {
        if (curriculum == undefined) {
            let sqlQuery = "SELECT * FROM CURRICULUM"
            return await this.execQuery(sqlQuery)
        }

        let sqlQuery = "SELECT * FROM CURRICULUM WHERE "
        const parameters = []

        for (let parameter in curriculum) {
            if (parameter != undefined)
                parameters.push(`${parameter} = '${curriculum[parameter]}' `)
        }

        let count = 0
        parameters.forEach(elemento => {
            if (count === 0) {
                count += 1
                sqlQuery += elemento
            } else
                sqlQuery += `and ${elemento}`
        })

        return await this.execQuery(sqlQuery)
    }

    async selectByUserId(curriculum) {
        const sqlQuery = `
        select * from curriculum as 'curriculums'
        inner join user
        on curriculums.user_id = user.user_id
        where user.user_id  = ${curriculum.user_id}
        and user.isActive = 1`

        return await this.execQuery(sqlQuery)
    }

    async insert(curriculum) {
        const sqlQuery = `INSERT INTO CURRICULUM
            (content, user_id)
            VALUES ('${curriculum.content}', ${curriculum.user_id})`
        console.log(sqlQuery)

        return await this.execQuery(sqlQuery)
    }

    // async update(curriculum) {
    //     const sqlQuery = `UPDATE CURRICULUM SET fileName = '${curriculum.fileName}', base64 = '${curriculum.fileContent}',
    //     base64 = '${curriculum.base64}', user_id = '${curriculum.user_id}'
    //                                    WHERE curriculum_id = '${curriculum.curriculum_id}'`
    //
    //     return await this.execQuery(sqlQuery, true)
    // }

    // async delete(user) {
    //     const sqlQuery = `UPDATE USERS SET isActive = '0'
    //     WHERE user_id = '${user.user_id}'`
    //
    //     return await this.execQuery(sqlQuery, true)
    // }
}