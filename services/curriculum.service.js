let curriculumsDatabase = new require('../repository/curriculum.repository')
curriculumDatabase = new curriculumsDatabase()
const pdf = require('pdf-parse')

module.exports = {
    async saveCurriculumInDatabase(curriculumInfo) {
        const curriculumToSave = {}
        try {
            const curriculumData = await pdf(curriculumInfo.buffer)


            curriculumToSave.content = curriculumData.text
            curriculumToSave.user_id = parseInt(curriculumInfo.user_id)

            const isCurriculumSaved = await this.checkIfCurriculumIsInDabase(curriculumToSave)
            if (isCurriculumSaved)
                throw new Error('The curriculum provided is already saved into the database')

            await curriculumDatabase.insert(curriculumToSave)
            const savedCurriculum = await curriculumDatabase.select(curriculumToSave)
            return savedCurriculum
        } catch (error) {
            if (error.message === 'The curriculum provided is already saved into the database')
                return [curriculumToSave]
            else throw error
        }
    },
    async updateCurriculumInDatabase(curriculum) {
        // const isRecruiterIsInDabaseWithSameEmail = await this.checkIfRecruiterIsInDabaseWithSameEmail(recruiter)

        // if(!isRecruiterIsInDabaseWithSameEmail)
        //     throw new Error('Recruiter is not saved in the application')

        // const databaseRecruiter = await this.getRecruiterFromDatabase(recruiter)
        // recruiter.recruiter_id = databaseRecruiter[0].recruiter_id

        if (curriculum.recruiter_id == undefined)
            throw new Error('curriculum_id is necessary to update a curriculum')

        const updatedCurriculum = await curriculumDatabase.update(curriculum)
        if (updatedCurriculum < 1)
            throw new Error('None curriculum was updated')

        return updatedCurriculum
    },
    async deleteCurriculumFromDatabase(curriculum) {
        if (curriculum.recruiter_id == undefined)
            throw new Error('curriculum_id is necessary to update a curriculum')

        curriculum.isActive = 0

        const updatedCurriculum = await curriculumDatabase.update(curriculum)
        if (updatedCurriculum < 1)
            throw new Error('None curriculum was deleted')

        return updatedCurriculum
    },
    async getCurriculumFromDatabase(curriculum) {
        const databaseCurriculum = await curriculumDatabase.select(curriculum)
        return databaseCurriculum
    },
    async checkIfCurriculumIsInDabase(curriculum) {
        const databaseCurriculums = await this.getCurriculumFromDatabase(curriculum)
        let isCurriculumSaved = 0

        databaseCurriculums.forEach(databaseCurriculum => {
            if (curriculum.name === databaseCurriculum.name)
                isCurriculumSaved++
        })

        if (isCurriculumSaved > 0)
            return true
        else
            return false

    },
}