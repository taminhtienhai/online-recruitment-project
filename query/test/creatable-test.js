var dynamodb = require('../dynamo')
var JobSeeker = require('./jobseeker')

dynamodb.getInstance().dynamo.createTable(JobSeeker.tableParam(),(err, data) => {
    if(err)
        console.log('Fail create table',JSON.stringify(err, null, 2))
    else
        console.log('Create success',JSON.stringify(data, null, 2))
})

