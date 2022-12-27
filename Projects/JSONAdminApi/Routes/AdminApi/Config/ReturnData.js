var express = require('express');
var router = express.Router();

router.use('/ShowData', require('./ReturnData/ShowData'));
router.use('/Update', require('./ReturnData/Update'));

module.exports = router;