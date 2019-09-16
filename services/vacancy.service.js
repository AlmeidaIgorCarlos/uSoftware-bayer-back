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
    },

    async getVacancy(recruiter_id){
        try {
            return await vacancyDatabase.select({
                recruiter_id: recruiter_id
            })
        } catch (error) {
            throw error
        }
    },

    async setIsAvaiableFalse(vacancy){
        try {
            const databaseVacancy = await vacancyDatabase.select({
                vacancy_id: vacancy.vacancy_id
            })

            databaseVacancy[0].isAvaiable = vacancy.isAvaiable == true ? 1 : 0
            databaseVacancy[0].isActive = databaseVacancy[0].isActive == true ? 1 : 0

            await vacancyDatabase.update(databaseVacancy[0])
        } catch (error) {
            throw error
        }
    },

    async setIsActiveFalse(vacancy){
        try {
            const databaseVacancy = await vacancyDatabase.select({
                vacancy_id: vacancy.vacancy_id
            })

            databaseVacancy[0].isAvaiable = databaseVacancy[0].isAvaiable == true ? 1 : 0
            databaseVacancy[0].isActive = vacancy.isActive == true ? 1 : 0

            const updated = await vacancyDatabase.update(databaseVacancy[0])
            console.log(updated)
        } catch (error) {
            throw error
        }
    }
}