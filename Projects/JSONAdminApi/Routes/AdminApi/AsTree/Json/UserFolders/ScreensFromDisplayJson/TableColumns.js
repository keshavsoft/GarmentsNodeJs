var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./TableColumns/SubKeys");
let CommonToggles = require("./TableColumns/Toggles");
let CommonDataAttributes = require("./TableColumns/DataAttributes");
let CommonAllInOneWithValues = require("./TableColumns/AllInOneWithValues");


router.use('/SubKeys', CommonSubKeys);
router.use('/Toggles', CommonToggles);
router.use('/DataAttributes', CommonDataAttributes);
router.use('/AllInOneWithValues', CommonAllInOneWithValues);


module.exports = router;