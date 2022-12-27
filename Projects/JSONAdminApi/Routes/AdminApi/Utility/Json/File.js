var express = require('express');
var router = express.Router();
let CommonFromMsSql = require("./File/FromMsSql");
let CommonInsert = require("./File/Insert");

router.use('/FromMsSql', CommonFromMsSql);
router.use('/Insert', CommonInsert);

module.exports = router;