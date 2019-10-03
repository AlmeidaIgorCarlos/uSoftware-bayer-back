module.exports = (requiredFields) => {
    const requirementSchema = {
        type: 'object',
        required: requiredFields,
        properties:{
            name: {
                type: 'string'
            },
            isRequired:{
                type: 'number'
            },
            vacancy_id:{
                type: 'number'
            }
    }}

    return requirementSchema
}