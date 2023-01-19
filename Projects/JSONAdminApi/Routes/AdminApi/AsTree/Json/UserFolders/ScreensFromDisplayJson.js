var express = require('express');
var router = express.Router();
let CommonTableColumns = require("./ScreensFromDisplayJson/TableColumns");
let CommonTableInfo = require("./ScreensFromDisplayJson/TableInfo");
let CommonSubTableColumns = require("./ScreensFromDisplayJson/SubTableColumns");

router.use('/TableColumns', CommonTableColumns);
router.use('/TableInfo', CommonTableInfo);
router.use('/SubTableColumns', CommonSubTableColumns);

module.exports = router;