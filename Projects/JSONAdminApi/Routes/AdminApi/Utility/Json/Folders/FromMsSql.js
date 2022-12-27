var express = require('express');
var router = express.Router();

router.use('/Insert', require('./FromMsSql/Insert'));

module.exports = router;