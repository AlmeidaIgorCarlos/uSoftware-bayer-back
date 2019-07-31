const baseDatabase = require('./base.repository')

module.exports = class userDatabaseService extends baseDatabase{
    async select(user){
        let sqlQuery = "SELECT * FROM USERS WHERE "
        const parameters = []

        for(let parameter in user){
            if(parameter != undefined)
                parameters.push(`${parameter} = '${user[parameter]}' `)
        }

        let count = 0
        parameters.forEach(elemento => {
            if(count === 0){
                count += 1
                sqlQuery += elemento
            }
            else
                sqlQuery += `and ${elemento}`
        })

        return await this.execQuery(sqlQuery)
    }

    async insert(user){
        const sqlQuery = `INSERT INTO USERS
            (name, lastName, age, address, mobilePhone, email, isActive, password)
            VALUES ('${user.name}', '${user.lastName}', ${user.age}, '${user.address}'
            , '${user.mobilePhone}', '${user.email}', '1', '${user.password}')`

        return await this.execQuery(sqlQuery)
    }
}