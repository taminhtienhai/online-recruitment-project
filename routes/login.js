var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('../views/page/login')
})

router.post('/',function(req,res){
    res.send('You are login')
})

module.exports = router