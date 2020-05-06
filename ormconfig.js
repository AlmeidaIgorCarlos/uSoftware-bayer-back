const { join } = require('path')
console.log(join(__dirname, 'dist', '**', '*.entity.{ts,js}'))
module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'aErB3G7bDFMWv=.JZCFr',
    database: 'postgres',
    entities: [join(__dirname, 'dist', '**', '*.entity.{ts,js}')],
    synchronize: true,
}