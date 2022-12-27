var express = require('express');
var router = express.Router();

let CommonTransformBeforeSave = require("./ServerSide/TransformBeforeSave")

router.use('/TransformBeforeSave', CommonTransformBeforeSave);


module.exports = router;