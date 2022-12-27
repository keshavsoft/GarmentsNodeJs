let express = require("express");
let router = express.Router();

router.use('/PrintToPrinter', require('./TableRowOptions/PrintToPrinter'));
router.use('/Delete', require('./TableRowOptions/Delete'));

module.exports = router;