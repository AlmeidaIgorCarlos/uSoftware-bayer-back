let userDatabase = new require('../repository/user.repository')
userDatabase = new userDatabase()

module.exports = {
    async getUsers(user) {
        user.isActive = 1
        console.log(1)
        if (user.vacancy_id != undefined)
            return await userDatabase.selectByVacancyId(user)


        console.log(2)
        return await userDatabase.select(user)
    },

    async updateUser(user){
        if(user.user_id == undefined)
            throw new Error('user_id is necessary to update a recruiter')

        const updatedUser = await userDatabase.update(user)
        if(updatedUser < 1)
            throw new Error('No user was updated')

        return updatedUser
    },

    async deleteUser(user){
        if(user.user_id == undefined)
        throw new Error('user_id is necessary to delete a recruiter')

    const deletedUser = await userDatabase.delete(user)
    if(deletedUser < 1)
        throw new Error('No user was delete')

    return deletedUser
    }
}
