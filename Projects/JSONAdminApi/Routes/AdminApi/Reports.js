var express = require('express');
var router = express.Router();
// var routeShowData = require("./Reports/ShowData");
// var routeForDataList = require("./Reports/ForDataList");
// var routeUpdate = require("./Reports/Update");
// var routeDelete = require("./Reports/Delete");
// var routeTableColumns = require("./Reports/TableColumns");

// var routeTableInfo = require("./Reports/TableInfo");
// var routeUtilities = require("./Reports/Utilities");
// var routeTabular = require("./Reports/Tabular");

var routeDuplicate = require("./Reports/Duplicate");

// router.use('/ShowData', routeShowData);
// router.use('/ForDataList', routeForDataList);
// router.use('/Update', routeUpdate);
// router.use('/Delete', routeDelete);
// router.use('/TableColumns', routeTableColumns);

// router.use('/TableInfo', routeTableInfo);
// router.use('/Utilities', routeUtilities);
// router.use('/Tabular', routeTabular);

router.use('/Duplicate', routeDuplicate);

module.exports = router;