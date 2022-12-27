var express = require('express');
var router = express.Router();

// router.use('/ShowData', require('./TableInfo/ShowData'));
// router.use('/Update', require('./TableInfo/Update'));
// router.use('/UpdateKeys', require('./TableInfo/UpdateKeys'));
// router.use('/ParentClasses', require('./TableInfo/ParentClasses'));
// router.use('/TableRowOptions', require('./TableInfo/TableRowOptions'));
// router.use('/Vertical', require('./TableInfo/Vertical'));

router.use('/SearchRowArray', require('./TableInfo/SearchRowArray'));

module.exports = router;