const path = require('path')
require('dotenv-safe').config()

module.exports = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [path.resolve(__dirname + '/src/entities/*.{ts,js}')],
    migrations: [path.resolve(__dirname + '/src/migrations/*.{ts,js}')],
}