var express = require('express');
var router = express.Router();

router.use('/ParentClasses', require('./TableInfo/ParentClasses'));



module.exports = router;