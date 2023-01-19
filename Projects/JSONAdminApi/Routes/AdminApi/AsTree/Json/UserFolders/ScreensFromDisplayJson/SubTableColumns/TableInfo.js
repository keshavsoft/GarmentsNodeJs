var express = require('express');
var router = express.Router();
let CommonTableInfo = require("./TableInfo/FromKeys");
let CommonToggles = require("./TableInfo/Toggles");
let CommonSubMenu = require("./TableInfo/SubMenu");

router.use('/FromKeys', CommonTableInfo);
router.use('/Toggles', CommonToggles);
router.use('/SubMenu', CommonSubMenu);



module.exports = router;