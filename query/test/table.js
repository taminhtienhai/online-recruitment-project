class Table{

    constructor(build){
        this.params = build.params
    }

    static tableInfo(tableName){
        let obj ={
            TableName: tableName.name,
            AttributeDefinitions:[
                { AttributeName: tableName.hashName(), AttributeType: 'S' },
                { AttributeName: tableName.rangeName(), AttributeType: 'S' }
            ],
            KeySchema:[
                { AttributeName: tableName.hashName(), KeyType: 'HASH' },
                { AttributeName: tableName.rangeName(), KeyType: 'RANGE' }
            ],
            ProvisionedThroughput:{
                ReadCapacityUnits: 10,
                WriteCapacityUnits: 10
            }
        }
        return obj
    }

    itemInfo(tableName,item){
        let obj = {
            TableName: tableName.name,
            Item: item
        }
        return obj;
    }

    static get Param() {
        class Param{
            constructor(tableName){
                this.tableName = tableName
                this.params = {}
                this.params.TableName = this.tableName
            }
            AttributeDefinitions(attr){
                this.params.AttributeDefinitions = attr
                return this
            }
            Item(item){
                this.params.Item = item
                return this
            }
            Key(k){
                this.params.Key = k
                return this
            }
            build(){
                return new Table(this)
            }
        }
        return Param
    }

}

module.exports = Table