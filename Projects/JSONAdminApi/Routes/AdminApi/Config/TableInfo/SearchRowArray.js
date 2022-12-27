let express = require("express");
let router = express.Router();
let CommonSearch = require('./SearchRowArray/Search');
let CommonLabel = require("./SearchRowArray/Label");
let CommonButton = require("./SearchRowArray/Button");

router.use('/Search',CommonSearch);
router.use('/Button',CommonButton);
router.use('/Label', CommonLabel);


module.exports = router;