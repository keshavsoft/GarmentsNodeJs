var express = require('express');
var router = express();

router.use('/MainKeys', require('./UpdateKeys/MainKeys'));

module.exports = router;