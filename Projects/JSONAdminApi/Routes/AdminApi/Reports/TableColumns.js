var express = require('express');
var router = express.Router();

router.use('/ForDataList', require('./TableColumns/ForDataList'));
router.use('/ShowData', require('./TableColumns/ShowData'));
router.use('/Update', require('./TableColumns/Update'));

module.exports = router;