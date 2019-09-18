var AWS = require('aws-sdk')

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
})

module.exports = (function () {
    let instance
    function create(){
        const dynamo = new AWS.DynamoDB()

        const dynamoClient = new AWS.DynamoDB.DocumentClient()

        return{
            dynamo: dynamo,
            dynamoClient: dynamoClient
        }
    }

    return{
        getInstance: function () {
            if(!instance)
                instance = new create()
            return instance
        }
    }
    
    function Singleton () {
        if(!instance)
            instance = initialize()
    }
})()
