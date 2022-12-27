var express = require('express');
var router = express.Router();

router.use('/Insert', require('./Bulk/Insert'));

module.exports = router;