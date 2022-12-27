var express = require('express');
var router = express.Router();

router.use('/DefaultValueCreate', require('./ForServerSide/DefaultValueCreate'));
router.use('/TransformBeforeSave', require('./ForServerSide/TransformBeforeSave'));
router.use('/SaveCheck', require('./ForServerSide/SaveCheck'));
router.use('/EnterToServer', require('./ForServerSide/EnterToServer'));
router.use('/DefaultShowData', require('./ForServerSide/DefaultShowData'));

module.exports = router;