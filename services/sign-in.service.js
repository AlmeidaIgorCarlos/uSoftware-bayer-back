let userDatabase = require('../repository/user.repository')
userDatabase = new userDatabase()

let recruiterDatabase = new require('../repository/recruiter.repository')
recruiterDatabase = new recruiterDatabase()

const auth = require('./../services/auth.service')

module.exports = async (signInParameters, res)=>{
    try {
        signInParameters.isActive = 1      
        const users = await userDatabase.select(signInParameters)
        if(users.length > 0){
            return {
                ...users[0],
                role: 'user',
                token: await auth.authenticate({role:'user'}) 
            }
        }

        const recruiters = await recruiterDatabase.select(signInParameters)
        if(recruiters.length > 0){
            return {
                ...recruiters[0],
                role: 'recruiter',
                token: await auth.authenticate({role:'recruiter'}) 
            }
        }
    }catch (error) {
        console.error(error)
        throw error
    }
}