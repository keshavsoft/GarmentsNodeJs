var express = require('express');
var router = express.Router();

router.use('/ParentClasses', require('./ForSubTableTableInfo/ParentClasses'));

module.exports = router;