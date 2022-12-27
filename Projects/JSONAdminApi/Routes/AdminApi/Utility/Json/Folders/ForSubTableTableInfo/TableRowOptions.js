var express = require('express');
var router = express.Router();

router.use('/Delete', require('./TableRowOptions/Delete'));
router.use('/PrintToPrinter', require('./TableRowOptions/PrintToPrinter'));
//router.use('/Show', require('./TableRowOptions/Show'));
router.use('/Popup', require('./TableRowOptions/Popup'));

module.exports = router;