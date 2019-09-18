var Table = require('./table')

var data = new Table.Param('Shop').Item({name: 'Hai', age: '15'})
                                    .AttributeDefinitions([{AttributeName: 'name', AttributeType: 'S'}])
                                    .build()

console.table(data.params)