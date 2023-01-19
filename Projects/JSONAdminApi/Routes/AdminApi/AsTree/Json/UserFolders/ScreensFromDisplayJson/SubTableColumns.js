var express = require('express');
var router = express.Router();
let CommonSubKeys = require("./SubTableColumns/SubKeys");
let CommonToggles = require("./SubTableColumns/Toggles");
let CommonDataAttributes = require("./SubTableColumns/DataAttributes");
let CommonAllInOneWithValues = require("./SubTableColumns/AllInOneWithValues");


router.use('/SubKeys', CommonSubKeys);
router.use('/Toggles', CommonToggles);
router.use('/DataAttributes', CommonDataAttributes);
router.use('/AllInOneWithValues', CommonAllInOneWithValues);


module.exports = router;