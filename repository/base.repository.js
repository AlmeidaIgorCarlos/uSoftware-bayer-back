const sql = require('mssql')

const connect = async () => {
    try {
        if(global.sqlConnection)
            return global.sqlConnection
        else{
            global.sqlConnection = await sql.connect(process.env.STRING_CONNECTION)
            return global.sqlConnection
        }
    } catch (error) {
        throw new Error(`Erro na conexão com o banco de dados: ${error.message}`)
    }
}

module.exports = class baseDatabase{
    async execQuery(sqlQuery){
        try {
            const connection = await connect()
            const data = await connection.request().query(sqlQuery)
    
            return data.recordset
        } catch (error) {
            console.log(error)
        }
        
    }
}