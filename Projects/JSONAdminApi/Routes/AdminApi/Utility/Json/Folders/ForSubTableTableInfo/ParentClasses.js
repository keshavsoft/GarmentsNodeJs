var express = require('express');
var router = express.Router();

router.use('/Table', require('./ParentClasses/Table'));

module.exports = router;