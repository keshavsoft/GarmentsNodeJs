var express = require('express');
var router = express.Router();
let CommonJson = require("./AsTree/Json");

router.use('/Json', CommonJson);

module.exports = router;