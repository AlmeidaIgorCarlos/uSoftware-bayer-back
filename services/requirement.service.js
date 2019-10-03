let requirementDatabase = new require('../repository/requirement.repository')
requirementDatabase = new requirementDatabase()

let vacancyRequirementDatabase = new require('../repository/vacancy-requirement.repository')
vacancyRequirementDatabase = new vacancyRequirementDatabase()

module.exports = {

    async saveVacancyRequirement(requirement_id, vacancy_id){
        try {
            const vacancy_requirement = {
                requirement_id: requirement_id,
                vacancy_id: vacancy_id
            }

            await vacancyRequirementDatabase.insert(vacancy_requirement)

        } catch (error) {
            throw error
        }
    },
    async saveRequirementInDatabase (requirements) {
        return await Promise.all(
            
            requirements.map(async (requirement) => {
            const checkIfRequirementIsInDabase = await this.getRequirementFromDatabase(requirement)
            
            if(checkIfRequirementIsInDabase.length > 0){
                await this.saveVacancyRequirement(
                    checkIfRequirementIsInDabase[0].requirement_id,
                    requirement.vacancy_id
                )

                return checkIfRequirementIsInDabase[0]
            }
            else{
                requirement.isActive = 1
                requirement.isRequired = 1
                

                await requirementDatabase.insert(requirement)
                
                const newRequirement = await this.getRequirementFromDatabase(requirement)
                
                await this.saveVacancyRequirement(
                    newRequirement[0].requirement_id,
                    requirement.vacancy_id
                )

                return newRequirement[0]
            }

        }))
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