var express = require('express');
var router = express.Router();

router.use('/JsonConfig', require('./UpdateKeys/JsonConfig'));
router.use('/ItemConfig', require('./UpdateKeys/ItemConfig'));
router.use('/DataListInfo', require('./UpdateKeys/DataListInfo'));
router.use('/Columns', require('./UpdateKeys/Columns'));

module.exports = router;