var express = require('express');
var router = express.Router();

router.use('/Insert', require('./Screens/Insert'));


module.exports = router;