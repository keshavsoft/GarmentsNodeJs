let express = require('express');
let router = express.Router();

let commonItems = require("./ScreensFromDisplayJson/Items")

router.use('/Items', commonItems);

module.exports = router;