var express = require('express');
var router = express.Router();

// router.use('/Columns', require('./Config/Columns'));
router.use('/SubTable', require('./Config/SubTable'));


module.exports = router;