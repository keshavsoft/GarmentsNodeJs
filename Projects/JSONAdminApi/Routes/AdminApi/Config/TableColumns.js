var express = require('express');
var router = express.Router();

// router.use('/ShowData', require('./TableColumns/ShowData'));
// router.use('/Update', require('./TableColumns/Update'));
let CommonServer = require("./TableColumns/ServerSide")
let CommonToggles = require("./TableColumns/Toggles")
let CommonAllInOneWithValues = require("./TableColumns/AllInOneWithValues")

router.use('/UpdateKeys', require('./TableColumns/UpdateKeys'));
router.use('/ServerSide', CommonServer);
router.use('/Toggles', CommonToggles);
router.use('/AllInOneWithValues', CommonAllInOneWithValues);


module.exports = router;