let recruiterDatabase = new require('../repository/recruiter.repository')
recruiterDatabase = new recruiterDatabase()

module.exports = {
    async saveRecruiterInDatabase (recruiter) {
        recruiter.isActive = 1
        const isRecruiterSaved = await this.checkIfRecruiterIsInDabase(recruiter)
        const isRecruiterIsInDabaseWithSameEmail = await this.checkIfRecruiterIsInDabaseWithSameEmail(recruiter)

        if(isRecruiterSaved)
            throw new Error('The recruiter provided is already saved into the database')
        else if(isRecruiterIsInDabaseWithSameEmail)
            throw new Error('A recruiter with the email provided is already saved into the database')
            
        await recruiterDatabase.insert(recruiter)
        const savedRecruiter = await recruiterDatabase.select(recruiter)
        return savedRecruiter
    },
    async updateRecruiterInDatabase (recruiter) {
        // const isRecruiterIsInDabaseWithSameEmail = await this.checkIfRecruiterIsInDabaseWithSameEmail(recruiter)

        // if(!isRecruiterIsInDabaseWithSameEmail)
        //     throw new Error('Recruiter is not saved in the application')

        // const databaseRecruiter = await this.getRecruiterFromDatabase(recruiter)
        // recruiter.recruiter_id = databaseRecruiter[0].recruiter_id

        if(recruiter.recruiter_id == undefined)
            throw new Error('recruiter_id is necessary to update a recruiter')

        const updatedRecruiter = await recruiterDatabase.update(recruiter)
        if(updatedRecruiter < 1)
            throw new Error('None recruiter was updated')

        return updatedRecruiter
    },
    async deleteRecruiterFromDatabase (recruiter) {
        if(recruiter.recruiter_id == undefined)
            throw new Error('recruiter_id is necessary to update a recruiter')

        recruiter.isActive = 0

        const updatedRecruiter = await recruiterDatabase.update(recruiter)
        if(updatedRecruiter < 1)
            throw new Error('None recruiter was deleted')
            
        return updatedRecruiter
    },
    async getRecruiterFromDatabase (recruiter = {}) {
        const recruiters = await recruiterDatabase.select(recruiter)
        return recruiters
    },
    async checkIfRecruiterIsInDabase (recruiter) {
        const recruiters = await this.getRecruiterFromDatabase(recruiter)
        if(recruiters.length > 0)
            return true
        else
            return false
    },
    async checkIfRecruiterIsInDabaseWithSameEmail (recruiter) {
        const verifier = {email: recruiter.email}
        return await this.checkIfRecruiterIsInDabase(verifier)
    }
}