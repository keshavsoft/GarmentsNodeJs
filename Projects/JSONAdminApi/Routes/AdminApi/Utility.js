var express = require('express');
var router = express.Router();

router.use('/Json', require('./Utility/Json'));

module.exports = router;
