var express = require('express');
var router = express.Router();

router.use('/Columns', require('./SubTable/Columns'));

module.exports = router;