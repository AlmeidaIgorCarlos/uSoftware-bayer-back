const userRepository = require('./../repository/user.repository')

module.exports = class SignUpService{
    constructor(){
        this.userRepository = new userRepository()
    }

    async insertUser(user){
        try {
            if(await this.isUserSaved(user))
                throw new Error('this user is already saved in the database')

            const newUser = await this.userRepository.insert(user)
            return {...newUser, message:'user created successfully'}
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async isUserSaved(user){
        try {
            const {email} = user //Comparar somente pelo email

            const dbUser = await this.userRepository.select({email})
            if(dbUser.length) return true
            else return false
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    
}