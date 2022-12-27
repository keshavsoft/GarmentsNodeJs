var express = require('express');
var router = express.Router();

router.use('/Visibility', require('./ForTableInfo/Visibility'));
router.use('/FromKeys', require('./ForTableInfo/FromKeys'));
router.use('/TableRowOptions', require('./ForTableInfo/TableRowOptions'));
router.use('/ParentClasses', require('./ForTableInfo/ParentClasses'));
router.use('/SearchRowArray', require('./ForTableInfo/SearchRowArray'));
router.use('/Vertical', require('./ForTableInfo/Vertical'));


module.exports = router;