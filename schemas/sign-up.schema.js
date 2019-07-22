module.exports = () => {
    return {
        type: 'object',
        required: ['name', 'lastName', 'age', 'address', 'email', 'password'],
        properties:{
            name: {
                type: 'string'
            },
            lastName: {
                type: 'string'
            },
            age: {
                type: 'number'
            },
            address: {
                type: 'string'
            },
            mobilePhone: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            password: {
                type: 'string'
            }
    }}
}