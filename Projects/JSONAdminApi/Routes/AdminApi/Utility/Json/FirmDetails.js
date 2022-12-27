var express = require('express');
var router = express.Router();

router.use('/FromMsSql', require('./FirmDetails/FromMsSql'));

module.exports = router;

