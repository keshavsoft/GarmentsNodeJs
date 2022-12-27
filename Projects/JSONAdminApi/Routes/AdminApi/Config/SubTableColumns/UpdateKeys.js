var express = require('express');
var router = express.Router();

router.use('/Toggles', require('./UpdateKeys/Toggles'));
router.use('/AllInOneWithValues', require('./UpdateKeys/AllInOneWithValues'));
router.use('/DisplayType', require('./UpdateKeys/DisplayType'));
router.use('/Widths', require('./UpdateKeys/Widths'));
router.use('/DataAttributes', require('./UpdateKeys/DataAttributes'));
router.use('/DisplayOrder', require('./UpdateKeys/DisplayOrder'));


module.exports = router;