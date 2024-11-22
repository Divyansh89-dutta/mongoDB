var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    req.session.ban = true;
    res.cookie('age', 23);
    res.render('index');
})
router.get('/check', function(req, res){
    console.log(req.cookies.age);
    res.clearCookie('age');
    res.send('Session cleared');
})
module.exports = router;