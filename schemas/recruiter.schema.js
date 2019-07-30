module.exports = () => {
    return {
        type: 'object',
        required: ['name', 'lastName', 'email', 'password'],
        properties:{
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