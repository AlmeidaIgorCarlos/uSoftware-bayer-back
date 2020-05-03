let userDatabase = require('../repository/user.repository')
userDatabase = new userDatabase()

let recruiterDatabase = new require('../repository/user.repository')
recruiterDatabase = new recruiterDatabase()

const auth = require('./../services/auth.service')

module.exports = async(signInParameters, res) => {
    try {
        await recruiterDatabase.select(signInParameters)
    } catch (error) {
        console.error(error)
        throw error
    }
}