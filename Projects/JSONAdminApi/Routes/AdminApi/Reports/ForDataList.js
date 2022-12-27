let express = require('express');
let debug = require("debug")("KS2");
let router = express.Router();
let Repos = require("../../../Repository/AdminApi/Reports/ForDataList");

router.get('/', function (req, res, next) {
    let LocalJsonConfig = {};
    let LocalItemConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;
    LocalJsonConfig.inFolderName = req.query.inFolderName;
    LocalJsonConfig.inJsonFileName = req.query.inJsonFileName;
    LocalItemConfig.inItemName = req.query.inItemName;

    Repos.ShowNames({
        inJsonConfig: LocalJsonConfig, inItemConfig: LocalItemConfig, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

router.get('/ShowItemNames', function (req, res, next) {
    console.log("ShowItemNames : ");
    let LocalJsonConfig = {};
    let LocalItemConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;
    LocalJsonConfig.inFolderName = req.query.inFolderName;
    LocalJsonConfig.inJsonFileName = req.query.inJsonFileName;

    Repos.ShowItemNames({
        inJsonConfig: LocalJsonConfig, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

router.get('/VouchersConsider', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;
    let LocalReportName = req.query.inReportName;

    Repos.VouchersConsider({
        inReportName: LocalReportName, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

router.get('/Columns', function (req, res, next) {
    let LocalJsonConfig = {};
    let LocalReportConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;

    LocalJsonConfig.inFolderName = req.query.inFolderName;
    LocalJsonConfig.inJsonFileName = req.query.inJsonFileName;

    LocalReportConfig.inReportName = req.query.inReportName;
    LocalReportConfig.inPkName = req.query.inPkName;
    Repos.Columns({
        inJsonConfig: LocalJsonConfig, inReportConfig: LocalReportConfig, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

router.get('/JoinTables', function (req, res, next) {
    let LocalJsonConfig = {};
    let LocalReportConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;

    LocalJsonConfig.inFolderName = req.query.inFolderName;
    LocalJsonConfig.inJsonFileName = req.query.inJsonFileName;

    LocalReportConfig.inReportName = req.query.inReportName;
    LocalReportConfig.inPkName = req.query.inPkName;

    Repos.JoinTables({
        inJsonConfig: LocalJsonConfig, inReportConfig: LocalReportConfig, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

router.get('/JoinTablesColumns', function (req, res, next) {
    let LocalJsonConfig = {};
    let LocalReportConfig = {};
    let LocalUserName = req.KeshavSoft.kUserName;

    LocalJsonConfig.inFolderName = req.query.inFolderName;
    LocalJsonConfig.inJsonFileName = req.query.inJsonFileName;

    LocalReportConfig.inReportName = req.query.inReportName;
    LocalReportConfig.inPkName = req.query.inPkName;

    Repos.JoinTablesColumns({
        inJsonConfig: LocalJsonConfig, inReportConfig: LocalReportConfig, inUserName: LocalUserName, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;