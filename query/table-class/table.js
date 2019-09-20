class Table{

    constructor(){
    }

    tableParams(tableName){
        let obj = {
            TableName: tableName.name,
            KeySchema:[
                { AttributeName: tableName.hashName(), KeyType: 'HASH' }
            ],
            AttributeDefinitions:[
                { AttributeName: tableName.hashName(), AttributeType: 'S' }
            ],
            ProvisionedThroughput:{
                ReadCapacityUnits: 10,
                WriteCapacityUnits: 10
            }
        }
        return obj
    }

    itemParam(tableName,item){
        let obj = {
            TableName: tableName.name,
            Item: item
        }
        return obj;
    }

}

module.exports = Table