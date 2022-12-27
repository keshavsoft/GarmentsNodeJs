let express = require('express');
let router = express.Router();
let Repos = require("../../../../Repository/AdminApi/Reports/TableInfo/ShowData");

router.get('/', function (req, res, next) {
    let LocalUserName = req.KeshavSoft.kUserName;

    let LocalReportConfig = {};
    LocalReportConfig.inReportName = req.query.inReportName;
    
    Repos.ShowData({
        inReportConfig: req.KeshavSoft.ReportConfig,
        inUserName: LocalUserName,
        inQueryObject: req.KeshavSoft.KQueryObject,
        callback: (data, error) => {
            res.end(JSON.stringify(data));
        }
    });
});


module.exports = router;