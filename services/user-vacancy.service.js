let vacancyDatabase = new require('../repository/user-vacancy.repository')
vacancyDatabase = new vacancyDatabase()

module.exports = {
    async getUserVacancies(user_vacancy){
        try {
            return await vacancyDatabase.select(user_vacancy)
        } catch (error) {
            throw error
        }
    },
    async insertUserVacancy(user_vacancy){
        try {
            await vacancyDatabase.insert(user_vacancy)
            const newUserVacancy = await vacancyDatabase.select()
            return newUserVacancy[newUserVacancy.length-1]
        } catch (error) {
            throw error
        }
    },
    async deleteUserVacancy(user_vacancy){
        try {
            user_vacancy.isActive = false
            return await vacancyDatabase.update(user_vacancy)
        } catch (error) {
            throw error
        }
    },
    async fireUserVacancy(user_vacancy){
        try {
            user_vacancy.isHired = true
            return await vacancyDatabase.hireCandidate(user_vacancy)
        } catch (error) {
            throw error
        }
    } 
}
