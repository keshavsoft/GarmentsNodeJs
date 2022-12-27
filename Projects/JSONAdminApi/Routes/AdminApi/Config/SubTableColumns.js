var express = require('express');
var router = express.Router();

router.use('/ShowData', require('./SubTableColumns/ShowData'));
router.use('/Update', require('./SubTableColumns/Update'));
router.use('/UpdateKeys', require('./SubTableColumns/UpdateKeys'));
router.use('/TableInfo', require('./SubTableColumns/TableInfo'));

module.exports = router;