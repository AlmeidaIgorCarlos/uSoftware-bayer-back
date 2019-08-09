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
            isActive:{
                type: 'number'
            }
    }}

    return requirementSchema
}