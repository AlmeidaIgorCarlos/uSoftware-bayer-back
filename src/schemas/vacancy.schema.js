module.exports = (requiredFields) => {
    return {
        type: 'object',
        required: requiredFields,
        properties:{
            vacancy_id: {
                type: 'number'
            },
            job: {
                type: 'string'
            },
            quantity:{
                type: 'number'
            },
            isAvaiable:{
                type: 'boolean'
            },
            isActive:{
                type: 'boolean'
            },
            recruiter_id:{
                type: 'number'
            },
            description:{
                type: 'string'
            }
    }}
}

//['job', 'quantity', 'isAvaible', 'isActive', 'recruiter_id', 'description']