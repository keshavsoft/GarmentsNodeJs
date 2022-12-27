var express = require('express');
var router = express.Router();
let CommonTableColumns = require("./Config/TableColumns");
let CommonTableInfo = require("./Config/TableInfo");

// router.use('/TableInfo', require('./Config/TableInfo'));
// router.use('/SubTableColumns', require('./Config/SubTableColumns'));
// router.use('/ReturnData', require('./Config/ReturnData'));
// router.use('/Preload', require('./Config/Preload'));

router.use('/TableColumns', CommonTableColumns);
router.use('/TableInfo', CommonTableInfo);

module.exports = router;