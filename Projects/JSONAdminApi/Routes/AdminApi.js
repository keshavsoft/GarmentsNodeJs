var express = require('express');
var router = express.Router();
//let CommonjwtFunc = require("../../../common/jwt");
let CommonUtility = require("./AdminApi/Utility");
let CommonConfig = require("./AdminApi/Config");
let CommonReports = require("./AdminApi/Reports");
let CommonAsTree = require("./AdminApi/AsTree");

let CommonMiddlewareItemScreenColumn = require("../../../common/Middleware/AdminApi/Columns/Extract");

router.use('/Utility', CommonUtility);
//router.use('/Config', CommonMiddlewareItemScreenColumn.ItemScreenColumn, require("./AdminApi/Config"));
router.use('/Config', CommonMiddlewareItemScreenColumn.ItemScreenColumn, CommonConfig);
router.use('/Reports', CommonReports);
router.use('/AsTree', CommonAsTree);

module.exports = router;