let express = require('express');
let router = express.Router();

let commonScreensFromDisplayJson = require("./FromFile/ScreensFromDisplayJson")
let commonInsert = require("./FromFile/Insert")

router.use('/ScreensFromDisplayJson', commonScreensFromDisplayJson);
router.use('/Insert', commonInsert);

module.exports = router;