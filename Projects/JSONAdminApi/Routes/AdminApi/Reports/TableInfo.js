var express = require('express');
var router = express.Router();

router.use('/ShowData', require('./TableInfo/ShowData'));
router.use('/Update', require('./TableInfo/Update'));

module.exports = router;