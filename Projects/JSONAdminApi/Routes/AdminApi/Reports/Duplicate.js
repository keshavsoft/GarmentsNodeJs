var express = require('express');
var router = express.Router();

router.use('/Items', require('./Duplicate/Items'));

// router.use('/Screens', require('./Duplicate/Screens'));
// router.use('/Columns', require('./Duplicate/Columns'));
// router.use('/VouchersConsider', require('./Duplicate/VouchersConsider'));

module.exports = router;