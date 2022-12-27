var express = require('express');
var router = express.Router();
let CommonParentClasses = require("./SubKeys/ParentClasses");
let CommonDisplayType = require("./SubKeys/DisplayType");
let CommonWidths = require("./SubKeys/Widths");

router.use('/ParentClasses', CommonParentClasses);
router.use('/DisplayType', CommonDisplayType);
router.use('/Widths', CommonWidths);

module.exports = router;