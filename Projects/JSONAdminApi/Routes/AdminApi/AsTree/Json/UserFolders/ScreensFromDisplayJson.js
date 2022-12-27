var express = require('express');
var router = express.Router();
let CommonTableColumns = require("./ScreensFromDisplayJson/TableColumns");

router.use('/TableColumns', CommonTableColumns);

module.exports = router;