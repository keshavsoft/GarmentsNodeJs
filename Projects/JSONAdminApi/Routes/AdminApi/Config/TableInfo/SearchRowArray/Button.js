let express = require("express");
let router = express.Router();
let CommonNewWindow = require("./Button/NewWindow");
let CommonFooter = require("./Button/Footer");
let CommonPopUp = require("./Button/PopUp");
let CommonScrollable = require("./Button/Scrollable");


router.use('/NewWindow',CommonNewWindow);
router.use('/Footer',CommonFooter);
router.use('/PopUp',CommonPopUp);
router.use('/Scrollable',CommonScrollable);




module.exports = router;