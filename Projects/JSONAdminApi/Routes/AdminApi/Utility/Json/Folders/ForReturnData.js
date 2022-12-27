var express = require('express');
var router = express.Router();

router.use('/AllInfo', require('./ForReturnData/AllInfo'));

module.exports = router;