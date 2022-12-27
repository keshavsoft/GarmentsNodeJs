var express = require('express');
var router = express.Router();
let CommonInsert=require("./FromMsSql/Insert")

router.use('/Insert', CommonInsert);

module.exports = router;;
