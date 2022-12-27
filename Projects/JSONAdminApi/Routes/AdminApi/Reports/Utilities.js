var express = require('express');
var router = express.Router();

router.use('/Fix', require('./Utilities/Fix'));

module.exports = router;