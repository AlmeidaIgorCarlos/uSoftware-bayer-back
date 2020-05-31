const { join } = require('path')
require('dotenv-safe').config()

module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    migrations: ['./migrations/*.{ts, js}'],
    entities: [join(__dirname, 'dist', '**', '*.entity.{ts,js}')]
}