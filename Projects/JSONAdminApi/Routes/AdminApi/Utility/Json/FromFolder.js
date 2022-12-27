let express = require('express');
let router = express.Router();

let commonFromFile = require("./FromFolder/FromFile")
let commonInsert = require("./FromFolder/Insert")

router.use('/FromFile', commonFromFile);
router.use('/Insert', commonInsert);

module.exports = router;