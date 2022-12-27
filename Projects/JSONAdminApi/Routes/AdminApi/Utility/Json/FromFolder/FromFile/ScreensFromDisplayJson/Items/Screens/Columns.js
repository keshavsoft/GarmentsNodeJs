let express = require('express');
let router = express.Router();

let commonInsert = require("./Columns/Insert")

router.use('/Insert', commonInsert);

module.exports = router;