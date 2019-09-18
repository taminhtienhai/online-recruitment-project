class CreateParams {
    constructor(build) {
        this.params = build.params
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

module.exports = CreateParams