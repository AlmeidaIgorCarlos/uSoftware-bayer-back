module.exports = () => {
    return {
        type: 'object',
        required: ['name', 'lastName', 'email', 'password'],
        properties:{
            recruiter_id:{
                type: 'number'
            },
            name: {
                type: 'string'
            },
            lastName: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            password: {
                type: 'string'
            },
            isActive: {
                type: 'boolean'
            }
    }}
}