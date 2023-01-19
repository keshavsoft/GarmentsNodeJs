var express = require('express');
var router = express.Router();
let CommonLabel = require("./SearchRowArray/Label");

router.use('/Label', CommonLabel);

module.exports = router;