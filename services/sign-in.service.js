let userDatabase = require('../repository/user.repository')
userDatabase = new userDatabase()

let recruiterDatabase = new require('../repository/recruiter.repository')
recruiterDatabase = new recruiterDatabase()

const auth = require('./../services/auth.service')

module.exports = async (signInParameters, res)=>{
    try {        
        const users = await userDatabase.select(signInParameters)
        const recruiters = await recruiterDatabase.select(signInParameters)

        if(users.length > 0){
            const accessToken = await auth.authenticate({...users[0], role:'user'})
            res.status(200).send({token: accessToken})
        }else if(recruiters.length > 0){
            const accessToken = await auth.authenticate({...recruiters[0], role:'recuiter'})
            res.status(200).send({token: accessToken})
        }else
            res.status(404).send({message: 'User or recruiter with the provided information not found'})
    } catch (error) {
        res.status(404).send({message: error.message})
        console.error(error)
    }finally{
        res.end()
    }
}