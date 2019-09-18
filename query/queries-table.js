const aws = require('./dynamo')

const client = aws.getInstance().dynamoClient
const dynamo = aws.getInstance().dynamo

module.exports = {
    createTable: function(param){
        dynamo.createTable(param,(err, data) => {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2))
            } else {
                console.log('Create succeeded:'+data)
            }
        })
    },
    addItem: function (param) {
        client.put(param,(err, data) => {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2))
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2))
            }
        })
    },
    updateItem: function (param) {
        client.update(param, (err, data) => {
            if (err) {
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2))
            } else {
                console.log('Create succeeded:'+data)
            }
        })
    },
    deleteItem: function (param) {
        client.delete(param, function(err, data) {
            if (err) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2))
            } else {
                console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2))
            }
        })
    },
    queryItem: function (param) {
        client.query(param, function(err, data) {
            if (err)
                console.error("Unable to query. Error:", JSON.stringify(err, null, 2))
        })
    },
    scanItem: function (param) {
        client.scan(param,(err, data) => {
            if(err)
                console.error("Unable to scan. Error:", JSON.stringify(err, null, 2));
        })
    }
}









