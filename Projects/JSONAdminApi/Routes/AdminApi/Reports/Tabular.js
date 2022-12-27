var express = require('express');
var router = express.Router();

router.use('/TableColumns', require('./Tabular/TableColumns'));
router.use('/OrderByColumns', require('./Tabular/OrderByColumns'));
router.use('/VouchersConsider', require('./Tabular/VouchersConsider'));

module.exports = router;
