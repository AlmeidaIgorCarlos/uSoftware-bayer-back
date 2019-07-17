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
        throw new Error('Erro na conexão com o banco de dados')
    }
}

module.exports = class baseDatabase{
    insert(){

    }

    delete(){

    }

    update(){

    }

    async _select(sqlQuery){
        try {
            const connection = await connect()
            const data = await connection.request().query(sqlQuery)
    
            return data.recordset
        } catch (error) {
            console.log(error)
        }
        
    }
}