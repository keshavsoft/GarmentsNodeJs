let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/Delete/Columns");
let debug = require("debug")("KS2");
let _ = require("lodash");

router.get('/', function (req, res, next) {
    let LocalJsonConfig = {};
    let LocalItemConfig = {};
    let LocalUserName = req.cookies.kUserName;

    LocalJsonConfig.inFolderName = req.query.inFolderName;
    LocalJsonConfig.inJsonFileName = req.query.inJsonFileName;

    LocalItemConfig.inItemName = req.query.inItemName;
    LocalItemConfig.inPkName = req.query.inPkName;
    LocalItemConfig.inColumnsPk = req.query.inColumnsPk;

    Repos.Columns({
        inJsonConfig: LocalJsonConfig, inItemConfig: LocalItemConfig, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;