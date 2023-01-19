var express = require('express');
var router = express.Router();
let CommonFromKeys = require("./FooterType/FromKeys");

router.use('/FromKeys', CommonFromKeys);

module.exports = router;