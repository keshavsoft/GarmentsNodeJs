var express = require('express');
var router = express.Router();
let CommonTransformBeforeSave = require("./ServerSide/TransformBeforeSave");
let CommonDefaultValueShow = require("./ServerSide/DefaultValueShow");

router.use('/TransformBeforeSave', CommonTransformBeforeSave);
router.use('/DefaultValueShow', CommonDefaultValueShow);

module.exports = router;