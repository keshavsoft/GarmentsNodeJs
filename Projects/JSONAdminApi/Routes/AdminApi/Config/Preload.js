var express = require('express');
var router = express.Router();

router.use('/ShowData', require('./Preload/ShowData'));
router.use('/Update', require('./Preload/Update'));
router.use('/Tabular', require('./Preload/Tabular'));
router.use('/UpdateKeys', require('./Preload/UpdateKeys'));

module.exports = router;