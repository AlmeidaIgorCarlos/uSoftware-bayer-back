let vacancyDatabase = new require('../repository/vacancy.repository')
vacancyDatabase = new vacancyDatabase()

module.exports = {
    async saveVacancyInDatabase(vacancy){
        try {
            vacancy.isActive = true
            vacancy.isAvaiable = true
        
            return await vacancyDatabase.insert(vacancy)
        } catch (error) {
            throw error
        }
    }
}