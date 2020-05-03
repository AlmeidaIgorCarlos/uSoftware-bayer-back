const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.DATABASE_PASSWORD)
module.exports = {
    "development": {
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": process.env.DATABASE_HOST,
        "dialect": "postgres",
        "operatorsAliases": false
    },
    "test": {
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": process.env.DATABASE_HOST,
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": process.env.DATABASE_HOST,
        "dialect": "mysql",
        "operatorsAliases": false
    }
}