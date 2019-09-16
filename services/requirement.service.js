let requirementDatabase = new require('../repository/requirement.repository')
requirementDatabase = new requirementDatabase()

module.exports = {
    async saveRequirementInDatabase (requirement) {
        requirement.isActive = 1
        const isRequirementSaved = await this.checkIfRequirementIsInDabase(requirement)
        if(isRequirementSaved)
            throw new Error('The requirement provided is already saved into the database')
            
        await requirementDatabase.insert(requirement)
        const savedRequirement = await requirementDatabase.select(requirement)
        return savedRequirement
    },
    async checkIfRequirementIsInDabase(requirement){
        const databaseRequirements = await this.getRequirementFromDatabase(requirement)
        let isRequirementSaved = 0
        
        databaseRequirements.forEach(databaseRequirement=>{
            if(requirement.name === databaseRequirement.name)
            isRequirementSaved++
        })

        if(isRequirementSaved > 0)
            return true
        else
            return false

    },
    async getRequirementFromDatabase (requirement) {
        const databaseRequirement = await requirementDatabase.select(requirement)
        return databaseRequirement
    }
}