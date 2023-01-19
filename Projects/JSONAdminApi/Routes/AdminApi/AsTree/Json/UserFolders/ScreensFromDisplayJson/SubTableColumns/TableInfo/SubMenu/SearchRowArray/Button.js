var express = require('express');
var router = express.Router();
let CommonButton = require("./Button/NewWindow");
let CommonButton = require("./Button/PopUp");
let CommonButton = require("./Button/PrintToPrinter");
let CommonButton = require("./Button/Scrollable");

router.use('/NewWindow', CommonButton);
router.use('/PopUp', CommonButton);
router.use('/PrintToPrinter', CommonButton);
router.use('/Scrollable', CommonButton);

module.exports = router;