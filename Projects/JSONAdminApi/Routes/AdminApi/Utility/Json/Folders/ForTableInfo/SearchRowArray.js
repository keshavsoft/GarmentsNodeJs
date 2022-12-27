var express = require('express');
var router = express.Router();

router.use('/Label', require('./SearchRowArray/Label'));
router.use('/Search', require('./SearchRowArray/Search'));

module.exports = router;