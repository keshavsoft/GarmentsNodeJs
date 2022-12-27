var express = require('express');
var router = express.Router();

router.use('/ArrayItem', require('./VouchersConsider/ArrayItem'));
router.use('/Columns', require('./VouchersConsider/Columns'));

module.exports = router;