let express = require('express');
let router = express.Router();

let commonInsert = require("./Items/Insert")
let commonScreens = require("./Items/Screens")

router.use('/Insert', commonInsert);
router.use('/Screens', commonScreens);

module.exports = router;