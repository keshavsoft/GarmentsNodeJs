var express = require('express');
var router = express.Router();
let CommonParentClasses = require("./SubKeys/ParentClasses");
let CommonDisplayType = require("./SubKeys/DisplayType");
let CommonWidths = require("./SubKeys/Widths");
let CommonKDatasetStuff = require("./SubKeys/KDatasetStuff");
let CommonServerSide = require("./SubKeys/ServerSide");

router.use('/ParentClasses', CommonParentClasses);
router.use('/DisplayType', CommonDisplayType);
router.use('/Widths', CommonWidths);
router.use('/KDatasetStuff', CommonKDatasetStuff);
router.use('/ServerSide', CommonServerSide);

module.exports = router;