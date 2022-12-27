var express = require('express');
var router = express.Router();
let CommonUserFolders = require("./Json/UserFolders");

router.use('/UserFolders', CommonUserFolders);

module.exports = router;