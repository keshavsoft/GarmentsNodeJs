var express = require('express');
var router = express.Router();
let CommonTransformBeforeSave = require("./ServerSide/TransformBeforeSave");
let CommonDefaultValueShow = require("./ServerSide/DefaultValueShow");
let CommonDefaultValueCreate = require("./ServerSide/DefaultValueCreate");
let CommonSaveCheck = require("./ServerSide/SaveCheck");

router.use('/TransformBeforeSave', CommonTransformBeforeSave);
router.use('/DefaultValueShow', CommonDefaultValueShow);
router.use('/DefaultValueCreate', CommonDefaultValueCreate);
router.use('/SaveCheck', CommonSaveCheck);

module.exports = router;