module.exports = () => {
    return {
        type: 'object',
        required: ['fileName', 'fileContent', 'base64', 'user_id'],
        properties:{
            curriculum_id:{
                type: 'number'
            },
            fileName: {
                type: 'string'
            },
            fileContent: {
                type: 'string'
            },
            base64: {
                type: 'string'
            },
            user_id: {
                type: 'number'
            }
        }}
}
