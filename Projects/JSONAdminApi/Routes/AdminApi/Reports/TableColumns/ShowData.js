let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/TableColumns/ShowData");

let debug = require("debug")("KS16");

router.get('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;

    Repos.ShowNames({
        inJsonConfig: req.KeshavSoft.JsonConfig, inReportConfig: req.KeshavSoft.ReportConfig, inUserName: LocalUserName, inQueryObject: req.KeshavSoft.KQueryObject, callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});

module.exports = router;