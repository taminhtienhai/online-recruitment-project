var express = require('express');
var router = express.Router();
var customer = require('../query/table/table-class.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var cus = new customer('Hai')
  cus.customerName
  res.render('../views/page/home', { title: 'Express' });
});


router.post('/',function(req, res) {
  console.log('POSTED')
  var bodyStr = 'hello';
  res.redirect('/')
})



module.exports = router;
