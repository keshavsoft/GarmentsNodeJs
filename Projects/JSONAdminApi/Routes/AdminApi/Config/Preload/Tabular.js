var express = require('express');
var router = express.Router();

router.use('/JsonConfig', require('./Tabular/JsonConfig'));
router.use('/ItemConfig', require('./Tabular/ItemConfig'));
router.use('/DataListInfo', require('./Tabular/DataListInfo'));
router.use('/Columns', require('./Tabular/Columns'));

module.exports = router;