var express = require('express');
var router = express.Router();
let CommonSearchRowArray = require("./SubMenu/SearchRowArray");
let CommonFooterType = require("./SubMenu/FooterType");


router.use('/SearchRowArray', CommonSearchRowArray);
router.use('/FooterType', CommonFooterType);



module.exports = router;