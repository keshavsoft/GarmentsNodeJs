let express = require('express');
let router = express.Router();

let commonInsert = require("./Screens/Insert")
let commonColumns = require("./Screens/Columns")

router.use('/Insert', commonInsert);
router.use('/Columns', commonColumns);

module.exports = router;