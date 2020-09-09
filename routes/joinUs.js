var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('joinUs', { title: '加入我们' });
});

module.exports = router;