var express = require('express');
var router = express.Router();

router.use('/Columns', require('./Delete/Columns'));

module.exports = router;