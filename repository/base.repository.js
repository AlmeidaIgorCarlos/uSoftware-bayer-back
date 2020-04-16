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
            throw new Error(`Erro na conexão com o banco de dados: ${error.message}`)
        }
    }
}