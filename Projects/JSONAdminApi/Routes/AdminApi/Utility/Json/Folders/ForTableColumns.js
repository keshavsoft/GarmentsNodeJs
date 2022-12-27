var express = require('express');
var router = express.Router();
let CommonFromKeys = require("./ForTableColumns/FromKeys");
let CommonAllInOneWithValues = require("./ForTableColumns/AllInOneWithValues")
let CommonDataAttributes = require("./ForTableColumns/DataAttributes")

router.use('/Visibility', require('./ForTableColumns/Visibility'));
router.use('/FromKeys', CommonFromKeys);
router.use('/AllInOneWithValues', CommonAllInOneWithValues);
router.use('/DataAttributes', CommonDataAttributes);

module.exports = router;