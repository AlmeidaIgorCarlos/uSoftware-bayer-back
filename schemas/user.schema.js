module.exports = (requiredFields) => {
    const userSchema = {
        type: 'object',
        required: requiredFields,
        properties:{
            user_id:{
                type: 'string'
            },
            name: {
                type: 'string'
            },
            lastName: {
                type: 'string'
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
            },
            vacancyId:{
                //It's not a database property
                type: 'string'
            }
    }}
    
    if(userSchema == undefined)
        delete userSchema.required

    return userSchema 
}