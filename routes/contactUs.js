var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contactUs', { title: '联系我们' });
});

module.exports = router;