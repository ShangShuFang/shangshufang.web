var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('customerCooperation', { title: '客户合作' });
});

module.exports = router;