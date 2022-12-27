var express = require('express');
var router = express.Router();
let CommonForSubTableColumns = require('./Folders/ForSubTableColumns');
let CommonFromMsSql = require("./Folders/FromMsSql");

router.use('/Insert', require('./Folders/Insert'));
router.use('/AsTree', require('./Folders/AsTree'));
router.use('/ForTableColumns', require('./Folders/ForTableColumns'));
router.use('/ForSubTableColumns', CommonForSubTableColumns);
router.use('/ForReturnData', require('./Folders/ForReturnData'));
router.use('/ForServerSide', require('./Folders/ForServerSide'));
router.use('/ForTableInfo', require('./Folders/ForTableInfo'));
router.use('/ForSubTableTableInfo', require('./Folders/ForSubTableTableInfo'));
router.use('/FromMsSql', CommonFromMsSql);

module.exports = router;