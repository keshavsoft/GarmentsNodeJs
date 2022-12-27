var express = require('express');
var router = express.Router();

router.use('/Config', require('./Data/Config'));
router.use('/Items', require('./Data/Items'));
module.exports = router;

