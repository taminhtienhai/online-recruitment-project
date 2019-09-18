var query = require('../queries-table')
var JobSeeker = require('./jobseeker')

var it = new JobSeeker('Hai','18')

query.addItem(it.putParam())