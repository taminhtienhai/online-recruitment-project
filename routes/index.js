var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/page/home', { title: 'Express' });
});


router.post('/',function(req, res) {
  console.log('POSTED')
  var bodyStr = 'hello';
  res.redirect('/')
})



module.exports = router;
