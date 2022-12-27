var express = require('express');
var router = express.Router();
let CommonFromFolder = require('./Json/FromFolder');
let CommonFirmDetails = require('./Json/FirmDetails');

router.use('/Folder', require('./Json/Folder'));
router.use('/File', require('./Json/File'));
//router.use('/Items', require('./Json/Items'));

router.use('/Screens', require('./Json/Screens'));
router.use('/Columns', require('./Json/Columns'));
router.use('/Data', require('./Json/Data'));
router.use('/PreLoad', require('./Json/PreLoad'));
router.use('/Items', require('./Json/Data/Items'));
router.use('/Setup', require('./Json/Setup'));
router.use('/Bulk', require('./Json/Bulk'));
router.use('/FromFolder', CommonFromFolder);
router.use('/FirmDetails', CommonFirmDetails);

module.exports = router;