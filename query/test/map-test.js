var map = new Map()
var customer = require('../table/table-class')

map.set('name','Banner')
map.set('name','John')
map.set('age','12')

function mapToObject(data){
    let obj = Object.create(null)
    for(let [k,v] of data){
        obj[k] = v
    }
    return obj
}

var param = {
    TableName: 'People',
    AttributeDefinitions:[
        { AttributeName: 'weight',AttributeType: 'S' }
    ],
    KeySchema:[
        { AttributeName: 'weight',KeyType: 'HASH' }
    ]
}

console.log(mapToObject(map))
console.log(JSON.stringify(mapToObject(map)))
console.log(new customer('Hai'))
console.log(param)