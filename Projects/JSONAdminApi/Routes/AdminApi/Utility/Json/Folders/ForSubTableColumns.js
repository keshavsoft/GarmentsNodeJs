var express = require('express');
var router = express.Router();
let CommonKDataAttributes = require("./ForSubTableColumns/KDataAttributes")

router.use('/Visibility', require('./ForSubTableColumns/Visibility'));
router.use('/KDataAttributes', CommonKDataAttributes);

module.exports = router;