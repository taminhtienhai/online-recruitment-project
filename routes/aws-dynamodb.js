var express = require('express');
var router = express.Router();

let account = require('../query/table-class/account')

router.get('/',function (req,res) {

})

router.get('/create-table',function (req,res) {
    account.tableInfo(account)
})

router.get('/list-tables',function (req,res) {
    
})

module.exports = router