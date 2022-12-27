var express = require('express');
var router = express.Router();
let CommonVerticalCreate = require('./Vertical/VerticalCreate');

router.use('/VerticalCreate', CommonVerticalCreate);

module.exports = router;