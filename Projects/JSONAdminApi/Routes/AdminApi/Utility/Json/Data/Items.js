var express = require('express');
var router = express.Router();

router.use('/Insert', require('./Items/Insert'));


module.exports = router;