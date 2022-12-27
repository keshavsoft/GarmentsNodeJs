var express = require('express');
var router = express.Router();
let CommonScreensFromDisplayJson = require("./UserFolders/ScreensFromDisplayJson");

router.use('/ScreensFromDisplayJson', CommonScreensFromDisplayJson);

module.exports = router;