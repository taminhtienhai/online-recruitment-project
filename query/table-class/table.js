class Table{

    constructor(){
    }

    static tableParams(tableName){
        let obj ={
            TableName: tableName.name,
            AttributeDefinitions:[
                { AttributeName: tableName.hashName(), AttributeType: 'S' }
            ],
            KeySchema:[
                { AttributeName: tableName.hashName(), KeyType: 'HASH' }
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