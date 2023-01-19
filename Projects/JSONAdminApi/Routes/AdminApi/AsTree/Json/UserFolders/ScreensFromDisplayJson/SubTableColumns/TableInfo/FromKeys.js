var express = require('express');
var router = express.Router();
let CommonColumnReOrder = require("./FromKeys/ColumnReOrder");


router.use('/ColumnReOrder', CommonColumnReOrder);



module.exports = router;